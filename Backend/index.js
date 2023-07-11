const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connection/db.js");

const app = express();
const mongoose = require("mongoose");

const path = require("path");

dotenv.config();

//imports routes,middleware and config
const todos = require("./routes/todos.route.js");
const { notFoundRoute, errorHandler } = require("./config/errorHandler");

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

connectDB();

//url encoded
// app.use(express.urlencoded({ extended: true }));

//get method
app.get("/", (req, res) => {
  res.sendStatus(200).send("WELCOME TO THE TODOLIST APPLICATION");
});

//sets static folder

app.use(express.static(path.join(__dirname, "public")));

//error handling
 app.use(notFoundRoute);
// app.use(errorHandler);

//port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
