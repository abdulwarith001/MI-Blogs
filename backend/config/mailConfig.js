// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer'

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
};

const createMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    return false;
  }
};

const sendMail = async (subject, receiver, html) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"MI Blogs" <${process.env.MAIL_USERNAME}>`,
    to: receiver,
    subject: subject,
    html: html,
  };

  const emailSent = await createMail(transporter, mailOptions);
  return emailSent;
};

export default sendMail
