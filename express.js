const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("i am middlewere");
  return next();
});
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/about", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("index");
});
app.post("/post", (req, res) => {
  res.send("POST request to the homepage");
});
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
