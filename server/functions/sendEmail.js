const nodemailer = require('nodemailer');

async function sendEmail(recipient, message) {

  console.log('Sending email...');

  const transporter = nodemailer.createTransport({
    host: "smtp.dondominio.com",
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });
  
  let emailInfo = await transporter.sendMail({
    from: '[NEW MESSAGE] | Teext.me <support@teext.me>', 
    to: recipient,
    subject:  'You have a new message',
    html: `<p>${message}</p>`
  });

  console.log("Email sent: %s", emailInfo.messageId);

  return emailInfo;
}

module.exports = sendEmail;