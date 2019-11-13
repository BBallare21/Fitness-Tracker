require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databseUri = "mongodb://localhost/workout";

console.log(process.env.MONGODB_URI);
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    // useMongoClient: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });
} else {
  mongoose.connect(databseUri, {
    // useMongoClient: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });
}


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});