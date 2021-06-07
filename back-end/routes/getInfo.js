const User = require("../models/User");

const router = require("express").Router();

router.get("/:username", (req, res) => {
  const { username } = req.params;
  try {
    User.findOne({ username: username }, (e, user) => {
      if (e) {
        res.json({
          success: false,
          error: e.message,
        });
      } else {
        if (!user) {
          res.json({
            success: false,
            error: "no user",
          });
        } else {
          res.json({
            success: true,
            user: user,
          });
        }
      }
    });
  } catch (error) {
    console.log(e.message);
  }
});

module.exports = router;
