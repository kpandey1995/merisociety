const { Visitor } = require("../db/dbConnect");

const getAllvisitors = async (req, res) => {
  // console.log("asdasdasdasfasfasf");
  let visitor;
  try {
    visitor = await Visitor.find({});
  } catch (err) {
    console.log(err);
  }
  if (!visitor) {
    return res.status(404).json({ message: "No visitors found" });
  }
  return res.status(200).json({ visitor });
};

const getVisitorByDate = async (req, res) => {
  try {
    const dateParam = req.params.date;
    const [day, month, year] = dateParam.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    const visitors = await Visitor.find({ date: formattedDate });
    res.json(visitors);
  } catch (error) {
    console.error("Error retrieving visitors by date:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getVisitorByTime = async (req, res) => {
  try {
    const timeFromParam = req.params.from;
    const timeToParam = req.params.to;
    const dateParam = req.params.date;
    const [day, month, year] = dateParam.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    const visitors = await Visitor.find({
      date: formattedDate,
      time: { $gte: timeFromParam, $lte: timeToParam },
    });
    res.json(visitors);
  } catch (error) {
    console.error("Error retrieving visitors by time:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getVisitorByBlock = async (req, res) => {
  try {
    const blockNumber = req.params.block; // Use req.params.block instead of req.body.block
    const visitors = await Visitor.find({ block: blockNumber });
    res.json(visitors);
  } catch (error) {
    console.error("Error retrieving visitors by block:", error); // Corrected typo in the error log
    res.status(500).json({ message: "Internal server error" });
  }
};

const getVisitorByRoom = async (req, res) => {
  try {
    const blockNumber = req.params.block;
    const flatNumber = req.params.room;

    const visitors = await Visitor.find({
      block: blockNumber,
      room_no: flatNumber,
    });
    res.json(visitors);
  } catch (error) {
    console.error("Error retrieving visitors by room:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllvisitors,
  getVisitorByDate,
  getVisitorByRoom,
  getVisitorByTime,
  getVisitorByBlock,
};
