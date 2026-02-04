import nodemailer from 'nodemailer';
import { generateResultPdf, ResultData } from '../utils/pdf.util';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreplycampusschield@gmail.com',
    pass: process.env.EMAIL_PASS || 'acix rfbi kujh xwtj'
  }
});

// Minimal text footer
const emailFooter = (username?: string) => `

Regards,
UniZ Portal
Rajiv Gandhi University of Knowledge Technologies`;

// Fancy template for Result Emails only
const emailTemplate = (content: string) => `
<div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #222;">
  ${content}
  <br><br>
  <div style="color: #555;">
    Regards,<br>
    <strong>UniZ Portal</strong><br>
    Rajiv Gandhi University of Knowledge Technologies , Ongole
  </div>
</div>
`;

export const sendOtpEmail = async (email: string, username: string, otp: string): Promise<boolean> => {
  try {
    const text = `Dear ${username},

Please use the code below to complete your password reset request:

${otp}

This code is valid for 10 minutes. If you did not request this, please ignore this email.${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Password Verification Code',
      text
    });
    return true;
  } catch (error) {
    console.error(`Failed to send OTP email:`, error);
    return false;
  }
};

export const sendLoginNotification = async (email: string, username: string, ipAddress?: string): Promise<boolean> => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const text = `Dear ${username},

A new login was detected on your account.

Time: ${timestamp}
${ipAddress ? `IP Address: ${ipAddress}\n` : ''}Device: Web Browser

If this was not you, please reset your password immediately.${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Security Alert: New Login',
      text
    });
    return true;
  } catch (error) {
    console.error(`Failed to send login notification:`, error);
    return false;
  }
};

export const sendOutpassRequestNotification = async (email: string, username: string, reason: string, fromDate: string, toDate: string): Promise<boolean> => {
  try {
    const text = `Dear ${username},

Your outpass application has been submitted.

Reason: ${reason}
From: ${new Date(fromDate).toLocaleDateString('en-IN')}
To: ${new Date(toDate).toLocaleDateString('en-IN')}
Status: Pending Approval

You will be notified once the request is reviewed.${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'Outpass Application Submitted',
      text
    });
    return true;
  } catch (error) {
    console.error(`Failed to send outpass request notification:`, error);
    return false;
  }
};

export const sendOutpassApprovalNotification = async (email: string, username: string, status: 'approved' | 'rejected' | 'forwarded', approver: string, comment?: string): Promise<boolean> => {
  try {
    let statusText = 'Processed';
    if (status === 'approved') statusText = 'Approved';
    if (status === 'rejected') statusText = 'Rejected';
    if (status === 'forwarded') statusText = 'Forwarded';

    const text = `Dear ${username},

Your outpass application has been ${statusText.toLowerCase()}.

Reviewer: ${approver}
${comment ? `Remark: ${comment}\n` : ''}${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Outpass Application ${statusText}`,
      text
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const sendCheckpointNotification = async (email: string, username: string, type: 'check_in' | 'check_out', time: string): Promise<boolean> => {
  try {
    const action = type === 'check_in' ? 'Checked In' : 'Checked Out';
    const text = `Dear ${username},

You have successfully ${action} at the campus gate.

Time: ${time}

Safe travels!${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Campus ${action}`,
      text
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
      You may also view your results on the <a href="https://uniz.sreecharandesu.in">UniZ Academics Dashboard</a>.
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
    console.error(`Failed to send result email to ${email}:`, error.message);
    return false;
  }
};

export const sendNewRequestAlertToAdmin = async (adminEmail: string, studentName: string, studentId: string, reason: string): Promise<boolean> => {
  try {
    const text = `Dear Administrator,

A new outpass request has been submitted by ${studentName} (${studentId}).

Reason: ${reason}

Please login to the UniZ Admin Portal to review and take action.${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ Alerts" <noreplycampusschield@gmail.com>',
      to: adminEmail,
      subject: `New Outpass Request: ${studentId}`,
      text
    });
    return true;
  } catch (error) {
    console.error(`Failed to send admin alert:`, error);
    return false;
  }
};

export const sendActionConfirmationToAdmin = async (adminEmail: string, action: 'approved' | 'rejected', studentName: string, studentId: string): Promise<boolean> => {
  try {
    const actionText = action === 'approved' ? 'Approved' : 'Rejected';
    const text = `Dear Administrator,

You have successfully ${actionText} the outpass request for ${studentName} (${studentId}).

This email serves as a confirmation of your action.${emailFooter()}`;

    await transporter.sendMail({
      from: '"UniZ System" <noreplycampusschield@gmail.com>',
      to: adminEmail,
      subject: `Action Confirmed: ${actionText} ${studentId}`,
      text
    });
    return true;
  } catch (error) {
    return false;
  }
};
