import nodemailer from 'nodemailer';
import { generateResultPdf, ResultData } from '../utils/pdf.util';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreplycampusschield@gmail.com',
    pass: process.env.EMAIL_PASS || 'acix rfbi kujh xwtj'
  }
});

const emailTemplate = (title: string, content: string) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; -webkit-font-smoothing: antialiased; }
  .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
  .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 35px 25px; text-align: center; }
  .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
  .content { padding: 40px 35px; color: #334155; line-height: 1.6; font-size: 16px; }
  .footer { background-color: #f8fafc; padding: 25px; text-align: center; font-size: 13px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  .footer a { color: #64748b; text-decoration: none; }
  .btn { display: inline-block; padding: 14px 28px; background-color: #0f172a; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 500; margin-top: 25px; box-shadow: 0 4px 6px rgba(15, 23, 42, 0.2); transition: transform 0.2s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 6px 8px rgba(15, 23, 42, 0.25); }
  .info-box { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; margin: 25px 0; border-radius: 8px; }
  .highlight { color: #0f172a; font-weight: 600; }
  .status-badge { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 14px; font-weight: 600; }
  .status-pending { background-color: #fffbeb; color: #b45309; }
  .status-approved { background-color: #f0fdf4; color: #15803d; }
  .status-rejected { background-color: #fef2f2; color: #b91c1c; }
  
  /* Mobile Responsiveness */
  @media only screen and (max-width: 600px) {
    .container { margin: 0; border-radius: 0; width: 100% !important; }
    .content { padding: 25px 20px; }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>UniZ System</h1>
    </div>
    <div class="content">
      <h2 style="color: #0f172a; margin-top: 0; font-size: 22px; margin-bottom: 24px; font-weight: 700;">${title}</h2>
      ${content}
    </div>
    <div class="footer">
      <p style="margin: 0 0 10px;">This is an automated notification from the UniZ System.</p>
      <p style="margin: 0;">Rajiv Gandhi University of Knowledge Technologies</p>
    </div>
  </div>
</body>
</html>
`;

export const sendOtpEmail = async (email: string, username: string, otp: string): Promise<boolean> => {
  try {
    const content = `
      <p>Hello <span class="highlight">${username}</span>,</p>
      <p>We received a request to reset the password for your account. To proceed, please use the One-Time Password (OTP) below:</p>
      <div style="text-align: center; margin: 35px 0;">
        <div style="display: inline-block; background-color: #f1f5f9; padding: 15px 30px; border-radius: 12px; border: 2px dashed #cbd5e1;">
          <h1 style="color: #0f172a; letter-spacing: 8px; margin: 0; font-family: monospace; font-size: 32px;">${otp}</h1>
        </div>
      </div>
      <p style="color: #64748b; font-size: 14px;">This OTP is valid for <strong>10 minutes</strong>. Do not share this code with anyone.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Reset Your Password - UniZ',
      html: emailTemplate('Password Reset Request', content)
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
      <p>Hello <span class="highlight">${username}</span>,</p>
      <p>We detected a new successful login to your UniZ account.</p>
      <div class="info-box">
        <p style="margin: 8px 0;"><strong>Time:</strong> ${timestamp}</p>
        ${ipAddress ? `<p style="margin: 8px 0;"><strong>IP Address:</strong> ${ipAddress}</p>` : ''}
        <p style="margin: 8px 0;"><strong>Device:</strong> Web Browser</p>
      </div>
      <p style="color: #64748b; font-size: 14px;">If this wasn't you, please secure your account immediately by resetting your password.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'New Login Detected - UniZ',
      html: emailTemplate('🔐 Security Alert', content)
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
      <p>Hello <span class="highlight">${username}</span>,</p>
      <p>Your outpass request has been successfully submitted and is currently pending approval.</p>
      <div class="info-box">
        <p style="margin: 8px 0;"><strong>Reason:</strong> ${reason}</p>
        <p style="margin: 8px 0;"><strong>From:</strong> ${new Date(fromDate).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</p>
        <p style="margin: 8px 0;"><strong>To:</strong> ${new Date(toDate).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</p>
        <div style="margin-top: 15px;">
           <strong>Status:</strong> <span class="status-badge status-pending">Pending Review</span>
        </div>
      </div>
      <p style="color: #64748b;">You will receive another notification once your request is reviewed.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Requests" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Outpass Request Submitted - UniZ',
      html: emailTemplate('Outpass Request Received', content)
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
    const statusClass = isApproved ? 'status-approved' : 'status-rejected';
    const statusText = isApproved ? 'Approved' : 'Rejected';
    
    const content = `
      <p>Hello <span class="highlight">${username}</span>,</p>
      <p>Your outpass request has been reviewed and <strong class="${isApproved ? 'text-green-600' : 'text-red-600'}">${statusText.toLowerCase()}</strong>.</p>
      <div class="info-box">
        <div style="margin-bottom: 12px;">
           <strong>Status:</strong> <span class="status-badge ${statusClass}">${statusText}</span>
        </div>
        <p style="margin: 8px 0;"><strong>Reviewed by:</strong> ${approver}</p>
        ${comment ? `<p style="margin: 8px 0;"><strong>Comment:</strong> ${comment}</p>` : ''}
      </div>
      ${isApproved 
        ? '<p style="color: #15803d; background-color: #f0fdf4; padding: 12px; border-radius: 6px; border: 1px solid #bbf7d0;">✨ You may proceed with your journey. Safe travels!</p>' 
        : '<p style="color: #b91c1c;">If you have any questions, please contact the relevant authority.</p>'}
    `;

    await transporter.sendMail({
      from: '"UniZ Requests" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Outpass Request ${statusText} - UniZ`,
      html: emailTemplate(`Outpass ${statusText}`, content)
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const sendResultEmail = async (email: string, username: string, name: string, branch: string, campus: string, semesterId: string, grades: any[]): Promise<boolean> => {
  try {
    const content = `
      <p>Dear Student (<span class="highlight">${username}</span>),</p>
      <p>The results for <strong>${semesterId}</strong> have been officially published. We have attached a detailed report card to this email for your reference.</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://uniz.sreecharandesu.in" class="btn">View Full Result Dashboard</a>
      </div>
      
      <p style="color: #64748b; font-size: 14px;">Please download the attached PDF for a complete breakdown of your grades.</p>
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
      html: emailTemplate(`Results Published - ${semesterId}`, content),
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
