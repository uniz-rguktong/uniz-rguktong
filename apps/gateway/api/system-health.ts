import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const isLocal = process.env.NODE_ENV === 'development' || !process.env.VERCEL;

console.log(`System Health Check: isLocal=${isLocal}, NODE_ENV=${process.env.NODE_ENV}`);

const services = [
    { name: 'Auth Service', url: isLocal ? 'http://localhost:3001/health' : 'https://uniz-auth-service.vercel.app/health' },
    { name: 'User Service', url: isLocal ? 'http://localhost:3002/health' : 'https://uniz-user-service.vercel.app/health' },
    { name: 'Academics Service', url: isLocal ? 'http://localhost:3004/health' : 'https://uniz-academics-service.vercel.app/health' },
    { name: 'Outpass Service', url: isLocal ? 'http://localhost:3003/health' : 'https://uniz-outpass-service.vercel.app/health' },
    { name: 'Files Service', url: isLocal ? 'http://localhost:3005/health' : 'https://uniz-files-service.vercel.app/health' },
    { name: 'Mail Service', url: isLocal ? 'http://localhost:3006/health' : 'https://uniz-mail-service.vercel.app/health' },
    { name: 'Notification Service', url: isLocal ? 'http://localhost:3007/health' : 'https://uniz-notification-service.vercel.app/health' },
    { name: 'Cron Service', url: isLocal ? 'http://localhost:3008/health' : 'https://uniz-cron-service.vercel.app/health' }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const results = await Promise.all(services.map(async (s) => {
        try {
            const start = Date.now();
            const response = await axios.get(s.url, { timeout: 3000 });
            const duration = Date.now() - start;
            return {
                name: s.name,
                status: 'UP',
                latency: `${duration}ms`,
                details: response.data
            };
        } catch (error: any) {
            return {
                name: s.name,
                status: 'DOWN',
                error: error.message
            };
        }
    }));

    const allUp = results.every(r => r.status === 'UP');

    res.status(allUp ? 200 : 503).json({
        success: allUp,
        timestamp: new Date().toISOString(),
        services: results
    });
}
