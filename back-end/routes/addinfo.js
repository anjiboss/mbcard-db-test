const addInfoUser = require("../utils/addInfoUser");

const router = require("express").Router();

router.post("/:username", (req, res) => {
  const username = req.params.username;
  addInfoUser(username, res, req.body);
});

module.exports = router;
