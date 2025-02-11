const Visitor = require("../db/dbConnect");
const mongoose = require("mongoose");

const createVisitor = async (data) => {
  await Visitor.create(data);
};

module.exports = { createVisitor };
