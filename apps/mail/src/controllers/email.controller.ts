import { Request, Response } from 'express';
import { sendOtpEmail, sendResultEmail, sendLoginNotification, sendOutpassRequestNotification, sendOutingRequestNotification, sendOutpassApprovalNotification, sendOutingApprovalNotification, sendNewRequestAlertToAdmin, sendActionConfirmationToAdmin, sendCheckpointNotification } from '../services/email.service';

export const sendEmail = async (req: Request, res: Response) => {
    const { type, to, data } = req.body;
    
    try {
        let success = false;
        switch (type) {
            case 'otp':
                success = await sendOtpEmail(to, data.username, data.otp);
                break;
            case 'results':
                success = await sendResultEmail(to, data.username, data.name, data.branch, data.campus, data.semesterId, data.grades);
                break;
            case 'login_alert':
                success = await sendLoginNotification(to, data.username, data.ip);
                break;
            case 'outpass_request':
                success = await sendOutpassRequestNotification(to, data.username, data.reason, data.fromDate, data.toDate);
                break;
            case 'outing_request':
                success = await sendOutingRequestNotification(to, data.username, data.reason, data.fromDate, data.toDate);
                break;
            case 'outpass_approval':
                success = await sendOutpassApprovalNotification(to, data.username, data.status, data.approver, data.comment);
                break;
            case 'outing_approval':
                success = await sendOutingApprovalNotification(to, data.username, data.status, data.approver, data.comment);
                break;
            case 'admin_alert':
                success = await sendNewRequestAlertToAdmin(to, data.studentName, data.studentId, data.reason, data.type);
                break;
            case 'admin_action_confirmation':
                success = await sendActionConfirmationToAdmin(to, data.action, data.studentName, data.studentId, data.type);
                break;
            case 'checkpoint':
                success = await sendCheckpointNotification(to, data.username, data.type, data.time);
                break;
            default:
                return res.status(400).json({ success: false, message: 'Invalid email type' });
        }
        
        return res.json({ success });
    } catch (e: any) {
        return res.status(500).json({ success: false, message: 'Failed to send email due to a mail server error.' });
    }
};
