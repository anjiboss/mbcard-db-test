const User = require("../models/User");

const saveContact = async (username, contact, cb) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        contact: contact,
      }
    );
    console.log(updatedUser);
  } catch (e) {
    if (e) console.log(e);
  }
};

const saveCustomLink = async (username, customLink, cb) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        customLink: customLink,
      }
    );
    console.log(updatedUser);
  } catch (e) {
    if (e) console.log(e);
  }
};

const saveCustomSetting = async (username, customSetting, cb) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        customeSetting: customSetting,
      }
    );
    console.log(updatedUser);
  } catch (e) {
    if (e) console.log(e);
  }
};

const saveInfo = async (username, info, cb) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        info: info,
      }
    );
    console.log(updatedUser);
  } catch (e) {
    if (e) console.log(e);
  }
};

const saveSNS = async (username, sns, cb) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        sns: sns,
      }
    );
    console.log(updatedUser);
  } catch (e) {
    if (e) console.log(e);
  }
};

module.exports = {
  saveContact,
  saveCustomSetting,
  saveCustomLink,
  saveInfo,
  saveSNS,
};
