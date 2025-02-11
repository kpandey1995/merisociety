const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "IOAPARTMENTS";
const { Admin, Event } = require("../db/dbConnect");
const authMiddleware = require("../middleware");
const multer = require("multer");
const path = require("path");

router.use(cors());
router.use(express.static("public"));

router.post("/signup", async (req, res) => {
  const existingAdmin = await Admin.findOne({
    username: req.body.username,
  });

  if (existingAdmin) {
    res.send("Already an admin, please sign in");
  }

  const admin = await Admin.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const adminId = admin._id;
  const token = jwt.sign({ adminId }, JWT_SECRET);
  res.json({
    message: "Admin created successfully",
    token,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    res.status(411).json({
      message: "Admin not found",
    });
  }

  if (admin) {
    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/posters");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/event", upload.single("poster"), async (req, res) => {
  const event = await Event.create({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    poster: req.file.filename,
  });
  res.status(200).json({ message: "Event created successfully" });
});

router.get("/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
