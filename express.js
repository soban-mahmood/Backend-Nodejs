const express = require("express");
const app = express();
const port = 3000;
const connectedDB = require("./config/db");
const userModel = require("./models/user.model");


// third party middlewares
const morgan = require('morgan')

app.use(morgan('dev'))

// biuld in middlewere

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set("view engine", "ejs");

// coustom middlewere

app.use("/", (req, res, next) => {
  console.log("i am middlewere");
  return next();
});

app.get("/", function (req, res) {
  res.render("index");
});
app.post("/get-form-data", function (req, res) {
  console.log(req.body);
  res.send('submit')
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
