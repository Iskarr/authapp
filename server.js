const express = require("express");
require("dotenv").config();

const app = express();

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from the public API!"
  });
});

app.listen(3001);
console.log(
  "\x1b[32m%s\x1b[0m",
  "API server is up and listening on: " + process.env.REACT_APP_AUTH0_AUDIENCE
);
