import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Health check at root
    if (req.url === '/' || req.url === '/health') {
        return res.status(200).json({ 
            status: 'ok', 
            service: 'uniz-cron-service',
            message: 'Use /api/cron to trigger maintenance jobs'
        });
    }

    // Cron endpoint
    if (req.url?.includes('/api/cron') || req.url?.includes('/cron')) {
        try {
            console.log('Running Scheduled Maintenance...');
            
            // 0. Handle Timezone Offset (Campus is in IST +5:30)
            const now = new Date();
            // We adjust 'effectiveNow' to match the local campus time for comparison
            // since current data entry is storing local time strings as UTC.
            const indiaOffset = 5.5 * 60 * 60 * 1000;
            const effectiveNow = new Date(now.getTime() + indiaOffset);
            const approvalTimeoutThreshold = new Date(now.getTime() - 60 * 60 * 1000); // 1 hour timeout from issuance

            // 1. Expire past-dated requests (Both Pending and Approved)
            const dateExpiredOutpasses = await prisma.outpass.updateMany({
                where: { toDay: { lt: effectiveNow }, isExpired: false },
                data: { isExpired: true }
            });
            const dateExpiredOutings = await prisma.outing.updateMany({
                where: { toTime: { lt: effectiveNow }, isExpired: false },
                data: { isExpired: true }
            });

            // 2. Expire approved requests NOT checked out within 1 hour
            const approvalExpiredOutpasses = await prisma.outpass.updateMany({
                where: { 
                    isApproved: true, 
                    isExpired: false, 
                    checkedOutTime: null,
                    issuedTime: { lt: approvalTimeoutThreshold }
                },
                data: { isExpired: true }
            });
            const approvalExpiredOutings = await prisma.outing.updateMany({
                where: { 
                    isApproved: true, 
                    isExpired: false, 
                    checkedOutTime: null,
                    issuedTime: { lt: approvalTimeoutThreshold }
                },
                data: { isExpired: true }
            });

            console.log(`Maintenance Complete: Date Expired: ${dateExpiredOutpasses.count + dateExpiredOutings.count}, Approval Expired: ${approvalExpiredOutpasses.count + approvalExpiredOutings.count}`);
            
            return res.status(200).json({ 
                success: true, 
                report: {
                    date_expired: dateExpiredOutpasses.count + dateExpiredOutings.count,
                    approval_expired: approvalExpiredOutpasses.count + approvalExpiredOutings.count,
                    debug: {
                        currentTime: now.toISOString(),
                        effectiveTime: effectiveNow.toISOString(),
                        threshold: approvalTimeoutThreshold.toISOString()
                    }
                }
            });
        } catch (error) {
            console.error('Maintenance Failed:', error);
            return res.status(500).json({ error: 'Cron Job Failed' });
        }
    }

    return res.status(404).json({ error: 'Not Found' });
}
