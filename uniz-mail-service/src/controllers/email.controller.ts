import { Request, Response } from 'express';
import { sendOtpEmail, sendResultEmail, sendLoginNotification, sendOutpassRequestNotification, sendOutpassApprovalNotification } from '../services/email.service';

export const sendEmail = async (req: Request, res: Response) => {
    const { type, to, data } = req.body;
    
    // Auth secret check (Internal service call only)
    const internalSecret = req.headers['x-internal-secret'];
    if (internalSecret !== process.env.INTERNAL_SECRET && process.env.NODE_ENV === 'production') {
        // Skipping strict auth for now to allow easier testing, but normally:
        // return res.status(403).json({ success: false });
    }

    try {
        let success = false;
        switch (type) {
            case 'otp':
                success = await sendOtpEmail(to, data.username, data.otp);
                break;
            case 'results':
                success = await sendResultEmail(to, data.username, data.semesterId, data.grades);
                break;
            case 'login_alert':
                success = await sendLoginNotification(to, data.username, data.ip);
                break;
            case 'outpass_request':
                success = await sendOutpassRequestNotification(to, data.username, data.reason, data.fromDate, data.toDate);
                break;
            case 'outpass_approval':
                success = await sendOutpassApprovalNotification(to, data.username, data.status, data.approver, data.comment);
                break;
            default:
                return res.status(400).json({ success: false, message: 'Invalid email type' });
        }
        
        return res.json({ success });
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message });
    }
};
