const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  author: { type: String, required: true }, // Ensure author field is defined
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const theaterSchema = new mongoose.Schema({
  theaterId: { type: Number, required: true, index: true },
  location: {
    address: String,
    city: String,
    state: String,
    zipcode: String,
  },
});

const Book = mongoose.model("Book", bookSchema);
const User = mongoose.model("User", userSchema);
const Theater = mongoose.model("Theater", theaterSchema);

module.exports = { Book, User, Theater };
