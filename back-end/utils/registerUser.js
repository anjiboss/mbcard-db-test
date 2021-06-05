const User = require("../models/User");

const registerUser = async (userInfo, res) => {
  const { username, email, password } = userInfo;
  console.log(username);
  // Check If User Is Existed
  try {
    User.find(
      { $or: [{ username: username }, { email: email }] },
      async (e, user) => {
        console.log(user);
        if (user.toString() !== "") {
          res.send("User Existed");
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
    console.log(error);
  }
};

module.exports = registerUser;
