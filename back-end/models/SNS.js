const mongoose = require("mongoose");

const snsSchema = new mongoose.Schema({
  facebook: {
    type: String,
    default: null,
  },
  instagram: {
    type: String,
    default: null,
  },
  github: {
    type: String,
    default: null,
  },
  twitter: {
    type: String,
    default: null,
  },
});

const SNS = mongoose.model("Contact", snsSchema);
module.exports = SNS;
