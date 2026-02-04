
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreplycampusschield@gmail.com',
    pass: 'acix rfbi kujh xwtj'
  }
});

const mailOptions = {
  from: '"UniZ System Alert" <noreplycampusschield@gmail.com>',
  to: 'webmaster@uniz.com, sreechandra.desu@gmail.com',
  subject: 'System Update: Bulk Upload Complete',
  text: `Dear Webmaster,

This is an automated notification to confirm that all academic records (Grades and Attendance) for the current batch have been successfully uploaded and ingested into the UniZ Production Environment.

Summary:
- Data Integrity: Verified
- Ingestion Mode: Background Asynchronous
- Password Standard: {idnumber}@rguktong

The system is now fully operational for student access.

Regards,
Antigravity AI
System Engineering Team`
};

async function sendMail() {
  try {
    const info = await sendMailPromisified(mailOptions);
    console.log('✅ Email sent successfully:', info.response);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

function sendMailPromisified(options) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) reject(err);
      else resolve(info);
    });
  });
}

sendMail();
