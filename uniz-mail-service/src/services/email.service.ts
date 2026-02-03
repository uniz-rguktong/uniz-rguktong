import nodemailer from 'nodemailer';
import { generateResultPdf, ResultData } from '../utils/pdf.util';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreplycampusschield@gmail.com',
    pass: process.env.EMAIL_PASS || 'acix rfbi kujh xwtj'
  }
});

// Minimal template acting like a standard/plain professional email
const emailTemplate = (content: string) => `
<div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #222;">
  ${content}
  <br><br>
  <div style="color: #555;">
    Regards,<br>
    <strong>UniZ Portal</strong><br>
    Rajiv Gandhi University of Knowledge Technologies
  </div>
</div>
`;

export const sendOtpEmail = async (email: string, username: string, otp: string): Promise<boolean> => {
  try {
    const content = `
      Dear ${username},<br><br>
      Please use the text below to complete your password reset request:<br><br>
      <strong>${otp}</strong><br><br>
      This code is valid for 10 minutes. If you did not request this, please ignore this email.
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
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const content = `
      Dear ${username},<br><br>
      A new login was detected on your account.<br><br>
      <strong>Time:</strong> ${timestamp}<br>
      ${ipAddress ? `<strong>IP Address:</strong> ${ipAddress}<br>` : ''}
      <strong>Device:</strong> Web Browser<br><br>
      If this was not you, please reset your password immediately.
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
      Dear ${username},<br><br>
      Your outpass application has been submitted.<br><br>
      <strong>Reason:</strong> ${reason}<br>
      <strong>From:</strong> ${new Date(fromDate).toLocaleDateString('en-IN')}<br>
      <strong>To:</strong> ${new Date(toDate).toLocaleDateString('en-IN')}<br>
      <strong>Status:</strong> Pending Approval<br><br>
      You will be notified once the request is reviewed.
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
      Dear ${username},<br><br>
      Your outpass application has been <strong>${statusText.toLowerCase()}</strong>.<br><br>
      <strong>Reviewer:</strong> ${approver}<br>
      ${comment ? `<strong>Remark:</strong> ${comment}<br>` : ''}
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
      Dear ${name},<br><br>
      The results for <strong>${semesterId}</strong> have been published.<br><br>
      Please find the detailed grade report attached to this email.<br><br>
      You may also view your results on the <a href="https://uniz.vercel.app/academics">UniZ Academics Dashboard</a>.
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
