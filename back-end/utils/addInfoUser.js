const User = require("../models/User");
const {
  saveContact,
  saveCustomLink,
  saveCustomSetting,
  saveInfo,
  saveSNS,
} = require("./saveInfo");

const addInfoUser = (username, res, userInfo) => {
  const { contact, customLink, customSetting, info, sns } = userInfo;
  if (contact) {
    saveContact(contact);
  }
  if (customLink) {
    saveCustomLink(customLink);
  }
  if (customSetting) {
    saveCustomSetting(customSetting);
  }
  if (info) {
    saveInfo(info);
  }
  if (sns) {
    saveSNS(sns);
  }
  // Check If User Existed
  try {
    User.findOne({ username: username }, (e, user) => {
      if (e) {
        console.log(e);
      }
      if (!user) {
        res.send("No User");
      } else {
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = addInfoUser;
