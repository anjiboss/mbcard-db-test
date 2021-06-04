const mongoose = require("mongoose");

const CustomLinkSchema = new mongoose.Schema({
  URL: {
    type: String,
    default: null,
  },
  urlName: {
    type: String,
    default: null,
  },
});

const CustomLink = mongoose.model("Contact", CustomLinkSchema);
module.exports = CustomLink;
