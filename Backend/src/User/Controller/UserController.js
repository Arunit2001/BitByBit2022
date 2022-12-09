const express = require("express");
const { createUserLocal } = require("../Service/UserService");
var router = express.Router();

router.post("/create/local", async function (req, res, next) {
  const { email, password, first_name, last_name } = req.body;
  const response = await createUserLocal(
    email,
    password,
    first_name,
    last_name
  );
  res.send(response);
});

module.exports = router;
