const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);

app.get("/status", (req, res) => {
  res.json({ status: "Working" });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
