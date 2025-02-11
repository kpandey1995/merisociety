const express = require("express");
const {
  getAllvisitors,
  getVisitorByDate,
  getVisitorByRoom,
  getVisitorByTime,
  getVisitorByBlock,
} = require("../controller/Visitor_c");
const cors = require("cors");

const router = express.Router();

router.use(cors());
router.get("/all", getAllvisitors);
router.get("/dates/:date", getVisitorByDate);
router.get("/room/:block/:room", getVisitorByRoom);
router.get("/time/:date/:from/:to", getVisitorByTime);
router.get("/block/:block", getVisitorByBlock);

module.exports = router;
