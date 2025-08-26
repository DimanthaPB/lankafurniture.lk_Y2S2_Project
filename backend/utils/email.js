const nodemailer = require("nodemailer");

// Hardcoded Outlook credentials (⚠ not recommended for production)
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // TLS required
  auth: {
    user: "pixelbluegfx@outlook.com",   // your Outlook email
    pass: "oqkqrjdyfuekbybw", // your Outlook password or app password
  },
});

// Reusable email sender
const sendEmail = async (to, subject, text, html = null, attachments = []) => {
  try {
    const mailOptions = {
      from: `"Inventory System" <pixelbluegfx@outlook.com>`,
      to,
      subject,
      text,
      html,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

module.exports = sendEmail;
