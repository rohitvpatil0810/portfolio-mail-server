const nodemailer = require("nodemailer");
const Handlebars = require("handlebars");

const transponder = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

module.exports.sendEmail = async (data, email) => {
  let mailOptions = {
    from: process.env.EMAIL,
    to: data.receiver,
    subject: data.subject,
    html: email,
  };

  try {
    let result = await transponder.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
};
