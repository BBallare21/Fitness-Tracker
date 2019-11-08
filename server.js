const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



mongoose.connect("mongodb://workoutdb:password2@ds141228.mlab.com:41228/heroku_2cw7540x", {
  useMongoClient: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});