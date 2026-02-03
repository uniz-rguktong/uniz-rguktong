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
  body { font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #2d3748; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
  .email-container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
  .header { border-bottom: 2px solid #800000; padding-bottom: 12px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: center; }
  .uni-name { font-size: 18px; font-weight: 700; color: #800000; text-transform: uppercase; letter-spacing: 0.5px; }
  .system-name { font-size: 13px; color: #718096; font-weight: 500; text-transform: uppercase; float: right; margin-top: 4px;}
  .content { font-size: 15px; color: #2d3748; }
  .footer { margin-top: 45px; padding-top: 20px; border-top: 1px solid #edf2f7; font-size: 12px; color: #a0aec0; text-align: left; }
  a { color: #800000; text-decoration: none; font-weight: 500; }
  a:hover { text-decoration: underline; }
  .details-list { margin: 15px 0; padding-left: 0; list-style: none; }
  .details-list li { margin-bottom: 8px; font-size: 14px; }
  .info-label { font-weight: 600; color: #4a5568; width: 100px; display: inline-block; }
  .otp-code { font-size: 24px; font-weight: 700; letter-spacing: 4px; color: #800000; margin: 20px 0; display: inline-block; border-bottom: 1px dashed #cbd5e0; padding-bottom: 5px; }
  
  /* Utilities */
  .text-bold { font-weight: 700; }
  .mt-2 { margin-top: 10px; }
  .mb-4 { margin-bottom: 20px; }
</style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <span class="uni-name">RGUKT AP</span>
      <span class="system-name">UniZ Portal</span>
    </div>
    
    <div class="content">
      ${content}
    </div>

    <div class="footer">
      <p style="margin: 0;">Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh</p>
      <p style="margin: 5px 0 0;">This is an automated notification. Please do not reply directly to this email.</p>
    </div>
  </div>
</body>
</html>
`;

export const sendOtpEmail = async (email: string, username: string, otp: string): Promise<boolean> => {
  try {
    const content = `
      <p>Dear ${username},</p>
      <p>We received a request to reset your password. Use the code below to complete the process:</p>
      <div class="otp-code">${otp}</div>
      <p>This code is valid for 10 minutes. If you did not request this change, please ignore this email.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Password Verification Code',
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
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
    const content = `
      <p>Dear ${username},</p>
      <p>A new login to your account was detected.</p>
      <ul class="details-list">
        <li><span class="info-label">Date:</span> ${timestamp}</li>
        ${ipAddress ? `<li><span class="info-label">IP Address:</span> ${ipAddress}</li>` : ''}
        <li><span class="info-label">Device:</span> Web Browser</li>
      </ul>
      <p>If you recognize this activity, no action is required. If not, please proceed to reset your password immediately.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Security Alert: New Login',
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
      <p>Your outpass application has been successfully submitted.</p>
      <ul class="details-list">
        <li><span class="info-label">Reason:</span> ${reason}</li>
        <li><span class="info-label">From:</span> ${new Date(fromDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</li>
        <li><span class="info-label">To:</span> ${new Date(toDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</li>
        <li><span class="info-label">Status:</span> Pending Approval</li>
      </ul>
      <p>You will be notified once the relevant authorities review your request.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Outpass Application Submitted',
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
      <p>Your outpass application has been <strong>${statusText.toLowerCase()}</strong>.</p>
      <ul class="details-list">
        <li><span class="info-label">Reviewer:</span> ${approver}</li>
        ${comment ? `<li><span class="info-label">Remark:</span> ${comment}</li>` : ''}
      </ul>
      ${isApproved ? '<p>You may proceed with your journey. Safe travels.</p>' : '<p>Please contact the warden/care-taker for further clarification.</p>'}
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Outpass Application ${statusText}`,
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
      <p>We are writing to inform you that the results for <strong>${semesterId}</strong> have officially been published.</p>
      <p>A detailed grade report is attached to this email for your reference.</p>
      <p class="mt-2">You may also view your full academic history on the student portal:</p>
      <p><a href="https://uniz.vercel.app/academics">Access Academic Dashboard &rarr;</a></p>
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
      from: '"UniZ Academics" <noreplycampusschield@gmail.com>',
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
