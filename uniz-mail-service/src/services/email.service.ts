import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreplycampusschield@gmail.com',
    pass: process.env.EMAIL_PASS || 'acix rfbi kujh xwtj'
  }
});

const emailTemplate = (title: string, content: string) => `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 4px; background-color: #ffffff;">
    <div style="background-color: #003366; padding: 25px; border-radius: 4px 4px 0 0; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;">UniZ Campus</h1>
    </div>
    <div style="padding: 40px 30px; color: #333333; line-height: 1.6;">
      <h2 style="color: #003366; margin-top: 0; font-size: 18px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-bottom: 20px;">${title}</h2>
      ${content}
      <div style="margin-top: 40px; border-top: 1px solid #e0e0e0; padding-top: 20px; font-size: 12px; color: #666666; text-align: center;">
        <p style="margin: 0 0 5px;">This is an automated notification from the UniZ System.</p>
        <p style="margin: 0;">Rajiv Gandhi University of Knowledge Technologies</p>
      </div>
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
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Password Reset OTP',
      html: emailTemplate('Password Reset OTP', content)
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
      <p>Hello <strong>${username}</strong>,</p>
      <p>A successful login was detected on your account.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Time:</strong> ${timestamp}</p>
        ${ipAddress ? `<p style="margin: 5px 0;"><strong>IP Address:</strong> ${ipAddress}</p>` : ''}
      </div>
      <p style="color: #6b7280;">If this wasn't you, please secure your account immediately.</p>
    `;

    await transporter.sendMail({
      from: '"UniZ Security" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Login Notification',
      html: emailTemplate('🔐 Login Detected', content)
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
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your outpass request has been submitted successfully.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Reason:</strong> ${reason}</p>
        <p style="margin: 5px 0;"><strong>From:</strong> ${new Date(fromDate).toLocaleDateString('en-IN')}</p>
        <p style="margin: 5px 0;"><strong>To:</strong> ${new Date(toDate).toLocaleDateString('en-IN')}</p>
        <p style="margin: 5px 0;"><strong>Status:</strong> <span style="color: #f59e0b;">Pending Approval</span></p>
      </div>
    `;

    await transporter.sendMail({
      from: '"UniZ Requests" <noreplycampusschield@gmail.com>',
      to: email,
      subject: 'UniZ - Outpass Pending',
      html: emailTemplate('📝 Outpass Request Submitted', content)
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
    const statusColor = isApproved ? '#10b981' : '#dc2626';
    const statusText = isApproved ? 'Approved ✅' : 'Rejected ❌';
    
    const content = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your outpass request has been <strong style="color: ${statusColor};">${statusText}</strong>.</p>
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Status:</strong> <span style="color: ${statusColor};">${statusText}</span></p>
        <p style="margin: 5px 0;"><strong>Reviewed by:</strong> ${approver}</p>
        ${comment ? `<p style="margin: 5px 0;"><strong>Comment:</strong> ${comment}</p>` : ''}
      </div>
    `;

    await transporter.sendMail({
      from: '"UniZ Requests" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `UniZ - Outpass ${isApproved ? 'Approved' : 'Rejected'}`,
      html: emailTemplate(`${isApproved ? '✅' : '❌'} Outpass ${isApproved ? 'Approved' : 'Rejected'}`, content)
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const sendResultEmail = async (email: string, username: string, semesterId: string, grades: any[]): Promise<boolean> => {
  try {
    const gradeRows = grades.map(g => `
        <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 12px; font-size: 14px;">${g.subject.code}</td>
            <td style="padding: 12px; font-size: 14px;">${g.subject.name}</td>
            <td style="padding: 12px; font-weight: 600; color: #003366; text-align: center;">${g.grade}</td>
        </tr>
    `).join('');

    const content = `
      <p style="margin-bottom: 20px;">Dear Student (${username}),</p>
      <p style="margin-bottom: 20px;">The results for <strong>${semesterId}</strong> have been officially published. Please find your grade summary below:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; border: 1px solid #e0e0e0;">
        <thead style="background-color: #f8f9fa;">
            <tr>
                <th style="padding: 12px; text-align: left; font-size: 12px; color: #666666; text-transform: uppercase; font-weight: 600; border-bottom: 1px solid #e0e0e0;">Code</th>
                <th style="padding: 12px; text-align: left; font-size: 12px; color: #666666; text-transform: uppercase; font-weight: 600; border-bottom: 1px solid #e0e0e0;">Subject</th>
                <th style="padding: 12px; text-align: center; font-size: 12px; color: #666666; text-transform: uppercase; font-weight: 600; border-bottom: 1px solid #e0e0e0;">Grade</th>
            </tr>
        </thead>
        <tbody>
            ${gradeRows}
        </tbody>
      </table>

      <div style="text-align: center;">
        <a href="https://uniz.vercel.app/academics" style="background-color: #003366; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-size: 14px; font-weight: 500; display: inline-block;">View Full Academic Report</a>
      </div>
    `;

    await transporter.sendMail({
      from: '"UniZ Examination Cell" <noreplycampusschield@gmail.com>',
      to: email,
      subject: `Result Declaration: ${semesterId}`,
      html: emailTemplate(`Semester Results - ${semesterId}`, content)
    });
    
    return true;
  } catch (error: any) {
    console.error(`❌ Failed to send result email to ${email}:`, error.message);
    return false;
  }
};
