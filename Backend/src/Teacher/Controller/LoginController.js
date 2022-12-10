const express = require('express');
var router = express.Router();
var {teacherLoginService} = require('../Service/LoginService')

router.post('/',async function(req,res,next){
    const {email, password, } = req.body;
    const response = await teacherLoginService(email, password);
    res.send(response);
})

module.exports = router;