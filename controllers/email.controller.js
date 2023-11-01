var validator = require("validator");
const Handlebars = require("handlebars");
const emailTemplates = require("../constants/emailTemplates");
const { sendEmail } = require("../utility/sendEmail");

module.exports.sendNotifications = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    // Error Handling
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Please enter all details.",
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter valid email.",
      });
    }

    // Notification Email
    let notificationEmailCompiler = Handlebars.compile(
      emailTemplates.notificationEmailTemplate
    );
    let notificationEmail = notificationEmailCompiler({ name, email, message });
    let notificationEmailData = {
      receiver: process.env.MY_EMAIL,
      subject: "New Message Alert! 💌",
    };

    let notificationEmailResult = await sendEmail(
      notificationEmailData,
      notificationEmail
    );

    // Thank You Email
    let thankYouEmailCompiler = Handlebars.compile(
      emailTemplates.thankYouEmailTemplate
    );

    let thankYouEmail = thankYouEmailCompiler({ name });
    let thankYouEmailData = {
      receiver: email,
      subject: "🙏 Thank You for Reaching Out!",
    };

    let thankYouEmailResult = await sendEmail(thankYouEmailData, thankYouEmail);

    // Result Response
    res.status(200).json({
      success: true,
      msg: "Thank you for contacting",
      notificationEmailResult,
      thankYouEmailResult,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: "Something went wrong!",
      errorMessage: error,
    });
  }
};
