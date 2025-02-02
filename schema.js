const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true }, //using undex
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true }, //using undex
  password: { type: String, required: true },
});

const theaterSchema = new mongoose.Schema({
  theaterId: { type: Number, required: true, index: true }, //using undex
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
