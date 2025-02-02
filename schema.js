const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true }, //using ndex
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 }, // minimum caractres is 3 and maximum is 50
  email: {
    type: String,
    required: true,
    unique: true,
    index: true, //using index
    match: [/.+\@.+\..+/, "Please fill a valid email address"], // put a correct 
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Password must be at least 8 characters
  },
});

const theaterSchema = new mongoose.Schema({
  theaterId: { type: Number, required: true, index: true }, //using ndex
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
