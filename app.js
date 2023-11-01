const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = require("./routers");

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port ", port);
});

app.use(router);
