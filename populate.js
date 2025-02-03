const mongoose = require("mongoose");
const { Book, User, Theater } = require("./schema");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const sampleBooks = [
  { name: "RTT_55 EXPERIENCE", author: "abdou" },
  { name: "THE LORD OF THE RINGS", author: "J. R. R. Tolkien" },
  { name: "A Song of Ice and Fire", author: "George R. R. Martin" },
  { name: "HARRY POTTER", author: "J. K. Rowling" },
  { name: "RELATIVITY RESTREINTE", author: "ALBERT EINSTEIN" },
];

const sampleUsers = [
  {
    name: "MR.PAUL CHAPMAN",
    email: "userone@example.com",
    password: "Password1",
  },
  { name: "MR.BRYAN", email: "usertwo@example.com", password: "Password2" },
  { name: "RAMZI", email: "userthree@example.com", password: "Password3" },
  {
    name: "MOHAMED HAMOUDA",
    email: "userfour@example.com",
    password: "Password4",
  },
  {
    name: "MOUSTAFA ALANI",
    email: "userfive@example.com",
    password: "Password5",
  },
];

const sampleTheaters = [
  {
    theaterId: 1,
    location: {
      address: "123 Main St",
      city: "City One",
      state: "State One",
      zipcode: "12345",
    },
  },
  {
    theaterId: 2,
    location: {
      address: "456 Elm St",
      city: "City Two",
      state: "State Two",
      zipcode: "23456",
    },
  },
  {
    theaterId: 3,
    location: {
      address: "789 Oak St",
      city: "City Three",
      state: "State Three",
      zipcode: "34567",
    },
  },
  {
    theaterId: 4,
    location: {
      address: "101 Pine St",
      city: "City Four",
      state: "State Four",
      zipcode: "45678",
    },
  },
  {
    theaterId: 5,
    location: {
      address: "202 Maple St",
      city: "City Five",
      state: "State Five",
      zipcode: "56789",
    },
  },
];

const populateData = async () => {
  try {
    const bookDeleteResult = await Book.deleteMany({});
    const userDeleteResult = await User.deleteMany({});
    const theaterDeleteResult = await Theater.deleteMany({});

    console.log(`Deleted ${bookDeleteResult.deletedCount} books`);
    console.log(`Deleted ${userDeleteResult.deletedCount} users`);
    console.log(`Deleted ${theaterDeleteResult.deletedCount} theaters`);

    await Book.insertMany(sampleBooks);
    await User.insertMany(sampleUsers);
    await Theater.insertMany(sampleTheaters);

    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    mongoose.connection.close();
  }
};

populateData();
