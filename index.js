const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

const port = 5000;

app.use(cookieParser);

app.get("/", (req, res) => {
  res.cookie("name", "Pratiksha");
  res.send("hello from simple server :)");
});

app.get("/read", (req, res) => {
  console.log(req.cookies);
  res.send("Read :)");
});

app.listen(port);
