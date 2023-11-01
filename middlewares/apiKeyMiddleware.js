module.exports.apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === process.env.API_KEY) {
    next(); // API key is valid, continue with the request
  } else {
    res.status(401).json({ error: "Unauthorized" }); // Invalid API key
  }
};
