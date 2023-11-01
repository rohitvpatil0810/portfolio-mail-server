const { Router } = require("express");
const emailRouter = require("./email.router");
const router = Router();

router.use("/email", emailRouter);

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Welcome to Rohit Porfolio Mail Server.",
  });
});

module.exports = router;
