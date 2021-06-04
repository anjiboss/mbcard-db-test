const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  avtDir: {
    type: String,
    defaul: null,
  },
});

const Info = mongoose.model("Contact", InfoSchema);
module.exports = Info;
