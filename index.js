const express = require("express");
const http = require("http");
const { CONFIG } = require("./getSecrets");
const app = express();

console.log("CHECK CONFIG", CONFIG);
console.log("CHECK CONFIG>>>>", CONFIG.SECRETS);

app.get("/status", (req, res) => {
  res.json({ status: "Working", NAME: CONFIG?.APP_NAME });
});

module.exports = { app };
