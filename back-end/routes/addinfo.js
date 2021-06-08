const addInfoUser = require("../utils/addInfoUser");

const router = require("express").Router();

router.post("/:username", (req, res) => {
  const username = req.params.username;
  console.log(username, "\n", req.params);

  console.log("\n", req.body);
  addInfoUser(username, req.body, res, (e, user) => {
    if (!e) {
      res.json({
        success: true,
        user: user,
      });
    } else {
      res.json({
        success: false,
        error: e,
      });
    }
  });
});

module.exports = router;
