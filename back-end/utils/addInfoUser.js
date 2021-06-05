const User = require("../models/User");
const {
  saveContact,
  saveCustomLink,
  saveCustomSetting,
  saveInfo,
  saveSNS,
} = require("./saveInfo");

const addInfoUser = (username, userInfo, cb) => {
  const { contact, customLink, customSetting, info, sns } = userInfo;
  // Check If User Existed
  try {
    User.findOne({ username: username }, (e, user) => {
      if (e) {
        console.log(e);
      }
      if (!user) {
        res.send("No User");
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
      }
      cb();
    });
  } catch (error) {
    cb(error);
  }
};

module.exports = addInfoUser;
