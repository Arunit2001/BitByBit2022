const express = require('express');
var router = express.Router();
var {otherLoginService} = require('../Service/LoginService')

router.post('/',async function(req,res,next){
    const {email, password} = req.body;
    const response = await otherLoginService(email, password);
    res.send(response);
})

module.exports = router;