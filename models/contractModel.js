const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  contract: {
    type: String,
    default: "default.doc",
  },
});

const Contract = mongoose.model("contract", contractSchema);

module.exports = Contract;
