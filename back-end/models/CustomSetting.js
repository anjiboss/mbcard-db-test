const mongoose = require("mongoose");

const CustomSettingSchema = new mongoose.Schema({
  background: {
    type: String,
    default: null,
  },
});

const CustomLink = mongoose.model("Contact", CustomSettingSchema);
module.exports = CustomLink;
