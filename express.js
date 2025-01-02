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

app.get("/register", function (req, res) {
  res.render("index");
});

// create user
app.post("/register", async function (req, res) {
  console.log(req.body);

  const { username, email, password } = req.body

  const user = await userModel.create({
    username: username,
    email: email,
    password: password
  })
  console.log(user)
  res.send(user)
});

// read user
// find
app.get('/read-user', async (req, res) => {
  const users = await userModel.find({
    email: "A@gmail.com",
  })
  res.send(users)
})

// findOne
app.get('/read-user1', async (req, res) => {
  const users = await userModel.findOne({
    // email: "A@gmail.com",
    username: "b",
  })
  res.send(users)
})



// update user
app.get('/update-user',async function (req, res) {
  const user = await userModel.findOneAndUpdate(
 { username: "b" },{ email: "mern@gmail.com"}
  )
  res.send(user)
})

// delete user

app.get('/delete-user',async function (req, res) {
  const user = await userModel.findOneAndDelete(
    { username: "b" }
  )
  res.send(user)
})









// app.get("/contact", function (req, res) {
//   res.render("index");
// });
// app.post("/post", (req, res) => {
//   res.send("POST request to the homepage");
// });
app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});
