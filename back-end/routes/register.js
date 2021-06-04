const registerUser = require("../utils/registerUser");

const router = require("express").Router();

router.post("/", (req, res) => {
  registerUser(req.body, res);
});

module.exports = router;
