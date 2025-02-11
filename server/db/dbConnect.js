const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

// check whether the databse is connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected");
});

const VisitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact_no: {
      type: Number,
      required: true,
    },
    block: {
      type: String,
      required: true,
    },
    room_no: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Visitor = mongoose.model("Visitor", VisitorSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Event = mongoose.model("Event", eventSchema);

module.exports = { Visitor, Admin, Event };
