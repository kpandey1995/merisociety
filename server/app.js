const express = require("express");
const cors = require("cors");
const { Visitor } = require("./db/dbConnect");
// const { createVisitor } = require("./controller/visitorsController");
const adminRoutes = require("./routes/adminRoutes");
const visitor_router = require("./routes/visitor-router");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));
require("dotenv").config();

const PORT = process.env.PORT;
app.post("/submitForm", async (req, res) => {
  const { name, contact_no, block, room_no, date, time, purpose } = req.body;
  // console.log(req.body);
  const visitor = await Visitor.create({
    name,
    contact_no,
    block,
    room_no,
    date,
    time,
    purpose,
  });
  res.status(200).send("Visitors created successfully!");
});

app.use("/admin", adminRoutes);
app.use("/visitor", visitor_router);

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
