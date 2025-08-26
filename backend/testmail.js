const sendEmail = require("./utils/email");

sendEmail(
  "yourreceiver@gmail.com",    // recipient email
  "Test Email - Inventory System",
  "Hello! This is a test email from Nodemailer + Outlook."
);
