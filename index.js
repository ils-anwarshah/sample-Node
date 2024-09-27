const express = require("express");
const http = require("http");
const { CONFIG } = require("./getSecrets");
const app = express();

app.get("/status", (req, res) => {
  res.json({ status: "Working", NAME: CONFIG?.APP_NAME });
});

module.exports = { app };
