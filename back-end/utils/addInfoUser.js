const User = require("../models/User");
const {
  saveContact,
  saveCustomLink,
  saveCustomSetting,
  saveInfo,
  saveSNS,
} = require("./saveInfo");

const addInfoUser = (username, userInfo, res, cb) => {
  const { contact, customLink, customSetting, info, sns } = userInfo;
  // Check If User Existed
  try {
    User.findOne({ username: username }, (e, user) => {
      if (e) {
        console.log(e);
      }
      if (!user) {
        res.json({
          success: false,
          error: "No User",
        });
      } else {
        if (contact) {
          saveContact(username, contact);
        }
        if (customLink) {
          saveCustomLink(username, customLink);
        }
        if (customSetting) {
          saveCustomSetting(username, customSetting);
        }
        if (info) {
          saveInfo(username, info);
        }
        if (sns) {
          saveSNS(username, sns);
        }
        User.findOne({ username: username }, (e, updatedUser) => {
          if (!e) {
            user = updatedUser;
          }
        });
        cb(null, user);
      }
    });
  } catch (error) {
    cb(error, null);
  }
};

module.exports = addInfoUser;
