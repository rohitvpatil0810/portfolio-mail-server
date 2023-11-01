const { Router } = require("express");
const { sendNotifications } = require("../controllers/email.controller");

const emailRouter = Router();

emailRouter.post("/send-notification", sendNotifications);

module.exports = emailRouter;
