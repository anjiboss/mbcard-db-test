const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  phoneNum: {
    type: String,
    default: null,
  },
  alterPhone: {
    type: String,
    default: null,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
