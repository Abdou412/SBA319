require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Book, User, Theater } = require("./schema");
const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log(`hi abdou, you are connected on ${mongoose.connection.name}!`);
});

app.get("/books", (req, res) => {
  Book.find().then((books) => res.send(books));
});

app.get("/users", (req, res) => {
  User.find().then((users) => res.send(users));
});

app.get("/theaters", (req, res) => {
  Theater.find().then((theaters) => res.send(theaters));
});

app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
