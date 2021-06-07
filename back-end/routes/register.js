const registerUser = require("../utils/registerUser");

const router = require("express").Router();

router.post("/", (req, res) => {
  if (req.body.password !== req.body.repassword) {
    res.json({
      success: false,
      error: "Repeat Password Does Not Match",
    });
  } else {
    registerUser(req.body, res);
  }
});

module.exports = router;
