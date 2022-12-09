const express = require("express");
const { verifyTokenResetPassword, verifyTokenAdmin } = require("../../middlewares");
const { createAdminLocal } = require("../Service/AdminService");
var router = express.Router();

router.post("/create/local", async function (req, res, next) {
  const { email, password, first_name, last_name } = req.body;
  const response = await createAdminLocal(
    email,
    password,
    first_name,
    last_name
  );
  res.send(response);
});

router.get("/protected", verifyTokenAdmin, function(req, res, next){
  res.send("Protected Route");
})

router.post("/change/password", verifyTokenResetPassword);

module.exports = router;
