const cron = require("node-cron");
const axios = require("axios");

const serverURL = process.env.API_BASE_URL + "/ping";

// Schedule a cron job to make a request every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  try {
    // Make an HTTP GET request to your server
    const response = await axios.get(serverURL, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });

    if (response.status === 200) {
      console.log(new Date().toISOString(), "Server is alive.");
    } else {
      console.error(
        new Date().toISOString(),
        "Server did not respond as expected."
      );
    }
  } catch (error) {
    console.error(
      new Date().toISOString(),
      "Error while making the request:",
      error
    );
  }
});
