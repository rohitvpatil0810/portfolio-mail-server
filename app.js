const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const router = require("./routers");
const { spawn } = require("child_process");
const { apiKeyMiddleware } = require("./middlewares/apiKeyMiddleware");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port ", port);
});

// Cron Job to keep server alive on render.
// Spawn the child process for keepAlive.js
const keepAliveProcess = spawn("node", ["./utility/keepAlive.js"]);

// Listen for the child process events
keepAliveProcess.stdout.on("data", (data) => {
  console.log(`keepAlive.js stdout: ${data}`);
});

keepAliveProcess.stderr.on("data", (data) => {
  console.error(`keepAlive.js stderr: ${data}`);
});

keepAliveProcess.on("close", (code) => {
  console.log(`keepAlive.js child process exited with code ${code}`);
});

app.use(apiKeyMiddleware, router);
