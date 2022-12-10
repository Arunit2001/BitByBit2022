const express = require("express");
var router = express.Router();
var { loginService } = require("./../Service/LoginService");

router.post("/", async function (req, res, next) {
  const { email, password } = req.body;
  const response = await loginService(email, password);
  res.send(response);
});

module.exports = router;
