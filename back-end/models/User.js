const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide Username"],
  },
  password: {
    type: String,
    required: [true, "Please Provide Password"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Provide Email"],
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please Provide a valid email",
    ],
  },
  info: [
    {
      firstName: {
        type: String,
        required: [true, "You must tell me your First Name"],
      },
      lastName: {
        type: String,
        required: [true, "You must tell me your Last Name"],
      },
    },
  ],
  contact: [
    {
      phoneNumber: {
        type: String,
        required: false,
        default: null,
      },

      alterPhoneNumber: {
        type: String,
        required: false,
        default: null,
      },
    },
  ],
  sns: [
    {
      facebook: {
        type: String,
        required: false,
        default: null,
      },
      instagram: {
        type: String,
        required: false,
        default: null,
      },

      twitter: {
        type: String,
        required: false,
        default: null,
      },

      customLink: {
        have: Boolean,
        name: {
          type: String,
          required: false,
          default: null,
        },
        url: {
          type: String,
          required: false,
          default: null,
        },
      },
    },
  ],
  setting: {
    type: String,
    required: false,
    default: null,
  },
  quotes: {
    type: String,
    required: false,
    default: null,
  },
});

/////////previous-> run this befor saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
