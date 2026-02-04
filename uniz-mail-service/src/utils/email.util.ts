import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreplycampusschield@gmail.com',
    pass: process.env.EMAIL_PASS || 'acix rfbi kujh xwtj'
  }
});

const emailTemplate = (title: string, content: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px;">
    <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; border-radius: 8px 8px 0 0;">
      <h1 style="color: white; margin: 0; font-size: 24px;">UniZ Campus</h1>
    </div>
    <div style="padding: 30px;">
      <h2 style="color: #1f2937; margin-top: 0;">${title}</h2>
      ${content}
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        This is an automated email from UniZ Campus Management System.<br>
        Please do not reply to this email.
      </p>
    </div>
  </div>
`;

export const sendOtpEmail = async (email: string, username: string, otp: string): Promise<boolean> => {
  try {
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>You have requested to reset your password. Please use the following OTP to proceed:</p>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
        <h1 style="color: #1f2937; letter-spacing: 8px; margin: 0;">${otp}</h1>
      </div>
      <p style="color: #6b7280;">This OTP will expire in <strong>10 minutes</strong>.</p>
      <p style="color: #6b7280;">If you did not request this, please contact the administrator immediately.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Password Reset OTP',
      html: emailTemplate('Password Reset OTP', content)
    });
    console.log(`OTP email sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send OTP email:`, error);
    return false;
  }
};

export const sendLoginNotification = async (email: string, username: string, ipAddress?: string): Promise<boolean> => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>A successful login was detected on your account.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Time:</strong> ${timestamp}</p>
        ${ipAddress ? `<p style="margin: 5px 0;"><strong>IP Address:</strong> ${ipAddress}</p>` : ''}
        <p style="margin: 5px 0;"><strong>Device:</strong> Web Browser</p>
      </div>
      <p style="color: #6b7280;">If this wasn't you, please reset your password immediately and contact the administrator.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Login Notification',
      html: emailTemplate('Login Detected', content)
    });
    console.log(`Login notification sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send login notification:`, error);
    return false;
  }
};

export const sendProfileUpdateNotification = async (email: string, username: string, updatedFields: string[]): Promise<boolean> => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const fieldsList = updatedFields.map(field => `<li>${field}</li>`).join('');
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your profile has been updated successfully.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Updated at:</strong> ${timestamp}</p>
        <p style="margin: 5px 0;"><strong>Fields updated:</strong></p>
        <ul style="margin: 10px 0;">${fieldsList}</ul>
      </div>
      <p style="color: #6b7280;">If you did not make these changes, please contact the administrator immediately.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Profile Updated',
      html: emailTemplate('Profile Updated', content)
    });
    console.log(`Profile update notification sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send profile update notification:`, error);
    return false;
  }
};

export const sendPasswordChangeNotification = async (email: string, username: string): Promise<boolean> => {
  try {
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your password has been changed successfully.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Changed at:</strong> ${timestamp}</p>
      </div>
      <p style="color: #dc2626; font-weight: bold;">If you did not make this change, your account may be compromised.</p>
      <p style="color: #6b7280;">Please contact the administrator immediately if this wasn't you.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Password Changed',
      html: emailTemplate('Password Changed', content)
    });
    console.log(`Password change notification sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send password change notification:`, error);
    return false;
  }
};

export const sendOutpassRequestNotification = async (email: string, username: string, reason: string, fromDate: string, toDate: string): Promise<boolean> => {
  try {
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your outpass request has been submitted successfully and is pending approval.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Reason:</strong> ${reason}</p>
        <p style="margin: 5px 0;"><strong>From:</strong> ${new Date(fromDate).toLocaleDateString('en-IN')}</p>
        <p style="margin: 5px 0;"><strong>To:</strong> ${new Date(toDate).toLocaleDateString('en-IN')}</p>
        <p style="margin: 5px 0;"><strong>Status:</strong> <span style="color: #f59e0b;">Pending Approval</span></p>
      </div>
      <p style="color: #6b7280;">You will be notified once your request is reviewed.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Outpass Request Submitted',
      html: emailTemplate('Outpass Request Submitted', content)
    });
    console.log(`Outpass request notification sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send outpass request notification:`, error);
    return false;
  }
};

export const sendOutpassApprovalNotification = async (email: string, username: string, status: 'approved' | 'rejected', approver: string, comment?: string): Promise<boolean> => {
  try {
    const isApproved = status === 'approved';
    const statusColor = isApproved ? '#10b981' : '#dc2626';
    const statusText = isApproved ? 'Approved' : 'Rejected';
    
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your outpass request has been <strong style="color: ${statusColor};">${statusText}</strong>.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Status:</strong> <span style="color: ${statusColor};">${statusText}</span></p>
        <p style="margin: 5px 0;"><strong>Reviewed by:</strong> ${approver}</p>
        ${comment ? `<p style="margin: 5px 0;"><strong>Comment:</strong> ${comment}</p>` : ''}
      </div>
      ${isApproved 
        ? '<p style="color: #10b981;">You may proceed with your outpass. Safe travels!</p>' 
        : '<p style="color: #dc2626;">Please contact the administrator if you have any questions.</p>'}
    `;

    await transporter.sendMail({
      from: '"UniZ Campus" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `UniZ - Outpass ${isApproved ? 'Approved' : 'Rejected'}`,
      html: emailTemplate(`Outpass ${isApproved ? 'Approved' : 'Rejected'}`, content)
    });
    console.log(`Outpass ${status} notification sent to ${email}`);
    return true;
  } catch (error) {
    console.error(`Failed to send outpass ${status} notification:`, error);
    return false;
  }
};
