const addInfoUser = require("../utils/addInfoUser");

const router = require("express").Router();

router.post("/:username", (req, res) => {
  const username = req.params.username;
  addInfoUser(username, req.body, (e = null) => {
    if (!e) {
      res.json({
        success: true,
      });
    } else {
      res.json({
        success: false,
      });
    }
  });
});

module.exports = router;
