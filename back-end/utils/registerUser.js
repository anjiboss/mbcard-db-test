const User = require("../models/User");

const registerUser = async (userInfo, res) => {
  const { username, email, password } = userInfo;
  console.log(userInfo);
  // Check If User Is Existed
  try {
    User.find(
      { $or: [{ username: username }, { email: email }] },
      async (e, user) => {
        if (user.toString() !== "") {
          res.json({
            success: false,
            error: "User Existed",
          });
        } else {
          const user = new User({
            username: username,
            email: email,
            password: password,
          });
          user.save((e) => {
            if (e) {
              res.json({
                success: false,
                error: e.message,
              });
              console.log(e.message);
            } else {
              res.json({
                success: true,
                user,
              });
            }
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registerUser;
