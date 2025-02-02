require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Book, User, Theater } = require("./schema");
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`hi abdou, you are connected on ${mongoose.connection.name}!`);
});

app.use(express.json()); 


app
  .route("/books")
  .get((req, res) => {
    Book.find().then((books) => res.send(books));
  })
  .post((req, res) => {
    new Book(req.body).save().then((book) => res.send(book));
  });
  

app
  .route("/users")
  .get((req, res) => {
    User.find().then((users) => res.send(users));
  })
  .post((req, res) => {
    new User(req.body).save().then((user) => res.send(user));
  });


app
  .route("/theaters")
  .get((req, res) => {
    Theater.find().then((theaters) => res.send(theaters));
  })
  .post((req, res) => {
    new Theater(req.body).save().then((theater) => res.send(theater));
  });

app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
