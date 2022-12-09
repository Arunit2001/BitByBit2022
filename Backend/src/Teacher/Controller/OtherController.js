const express = require('express');
const { createOtherLocal } = require('../Service/OtherService');
var router = express.Router();

router.post('/create/local',async function(req,res,next){
    const {email, password, first_name, last_name} = req.body;
    const response = await createOtherLocal(email, password, first_name, last_name);
    res.send(response);
});


module.exports = router;