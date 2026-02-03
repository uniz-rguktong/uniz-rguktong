import nodemailer from 'nodemailer';
import { generateResultPdf, ResultData } from '../utils/pdf.util';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreplycampusschield@gmail.com',
    pass: process.env.EMAIL_PASS || 'acix rfbi kujh xwtj'
  }
});

const emailTemplate = (content: string) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #333; }
  p { margin-bottom: 15px; }
  .footer { margin-top: 30px; font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 15px; }
  a { color: #0056b3; text-decoration: none; }
</style>
</head>
<body>
  ${content}
  <div class="footer">
    <p>Regards,<br>UniZ System<br>Rajiv Gandhi University of Knowledge Technologies</p>
  </div>
</body>
</html>
`;

export const sendOtpEmail = async (email: string, username: string, otp: string): Promise<boolean> => {
  try {
    const content = `
      <p>Dear ${username},</p>
      <p>You have requested to reset your password. Please use the OTP below to proceed:</p>
      <p style="font-size: 24px; font-weight: bold; letter-spacing: 2px;">${otp}</p>
      <p>This OTP is valid for 10 minutes.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Password Reset OTP',
      html: emailTemplate(content)
    });
    return true;
  } catch (error) {
    console.error(`❌ Failed to send OTP email:`, error);
    return false;
  }
};

export const sendLoginNotification = async (email: string, username: string, ipAddress?: string): Promise<boolean> => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const content = `
      <p>Dear ${username},</p>
      <p>A new login was detected on your account.</p>
      <p>
        <strong>Time:</strong> ${timestamp}<br>
        ${ipAddress ? `<strong>IP Address:</strong> ${ipAddress}<br>` : ''}
        <strong>Device:</strong> Web Browser
      </p>
      <p>If this wasn't you, please reset your password immediately.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'New Login Detected',
      html: emailTemplate(content)
    });
    return true;
  } catch (error) {
    console.error(`❌ Failed to send login notification:`, error);
    return false;
  }
};

export const sendOutpassRequestNotification = async (email: string, username: string, reason: string, fromDate: string, toDate: string): Promise<boolean> => {
  try {
    const content = `
      <p>Dear ${username},</p>
      <p>Your outpass request has been submitted successfully.</p>
      <p>
        <strong>Reason:</strong> ${reason}<br>
        <strong>From:</strong> ${new Date(fromDate).toLocaleDateString('en-IN')}<br>
        <strong>To:</strong> ${new Date(toDate).toLocaleDateString('en-IN')}<br>
        <strong>Status:</strong> Pending Review
      </p>
      <p>You will be notified once your request is reviewed.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Requests" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Outpass Request Submitted',
      html: emailTemplate(content)
    });
    return true;
  } catch (error) {
    console.error(`❌ Failed to send outpass request notification:`, error);
    return false;
  }
};

export const sendOutpassApprovalNotification = async (email: string, username: string, status: 'approved' | 'rejected', approver: string, comment?: string): Promise<boolean> => {
  try {
    const isApproved = status === 'approved';
    const statusText = isApproved ? 'Approved' : 'Rejected';
    
    const content = `
      <p>Dear ${username},</p>
      <p>Your outpass request has been <strong>${statusText}</strong>.</p>
      <p>
        <strong>Reviewed by:</strong> ${approver}<br>
        ${comment ? `<strong>Comment:</strong> ${comment}<br>` : ''}
      </p>
      ${isApproved ? '<p>You may proceed with your journey.</p>' : ''}
    `;

    await transporter.sendMail({
      from: '"UniZ Requests" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Outpass Request ${statusText}`,
      html: emailTemplate(content)
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const sendResultEmail = async (email: string, username: string, name: string, branch: string, campus: string, semesterId: string, grades: any[]): Promise<boolean> => {
  try {
    const content = `
      <p>Dear ${name},</p>
      <p>Your results for <strong>${semesterId}</strong> have been published.</p>
      <p>Please find the attached report card for detailed grades.</p>
      <p><a href="https://uniz.vercel.app/academics">View Results Dashboard</a></p>
    `;
    
    // Generate PDF
    const pdfBuffer = await generateResultPdf({
        username,
        name: name || username,
        branch: branch || "N/A",
        campus: campus || "RGUKT",
        semesterId,
        grades
    });

    await transporter.sendMail({
      from: '"UniZ Examination Cell" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Result Declaration: ${semesterId}`,
      html: emailTemplate(content),
      attachments: [
        {
          filename: `${username}_${semesterId}_Report.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    });
    
    return true;
  } catch (error: any) {
    console.error(`❌ Failed to send result email to ${email}:`, error.message);
    return false;
  }
};
