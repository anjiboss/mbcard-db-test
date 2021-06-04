const User = require("../models/User");

const registerUser = async (userInfo, res) => {
  const { username, email, password } = userInfo;

  // Check If User Is Existed
  try {
    User.findOne({ username: username }, async (e, user) => {
      if (user) {
        res.send("User Existed");
      } else {
        try {
          const user = new User({
            username: username,
            email: email,
            password: password,
          });
          await user.save(() => res.send("save successfully"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = registerUser;
