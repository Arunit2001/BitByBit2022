const jwt = require('jsonwebtoken');
const Response = require('../util/response');
const Admin = require('./Admin/Model/admin');
const User = require('./User/Model/user');

module.exports = {
    verifyTokenAdmin: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log("authdata",authData)
                if (err) {
                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
                else if (authData.role == "admin") {
                    console.log(authData.role)
                    req.authData = authData
                    next()
                }
                else {

                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
            })
        } else {
            res.send(403)
        }
    },
    verifyTokenUser: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log(authData)
                if (err) {
                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
                else if (authData.role == "user" || authData.role == "admin") {
                    console.log(authData.role)
                    req.authData = authData
                    next()
                }
                else {
                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
            })
        } else {
            const response = new Response(false, "Please Login", 403, "", {});
            res.send(response);
        }
    },
    verifyTokenResetPassword: async function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                console.log("authdata",authData)
                if (err) {
                    res.send(403)
                }
                else if (authData.role == "admin") {
                    Admin.findOneAndUpdate({ _id: authData.user._id}, {$set: {"local.password":req.body.password}})
                    .then((result) => {
                            // console.log(result)
                            const response = new Response(true, "Password Updated", 200, "", {});
                            res.send(response);
                        }).catch((error) => {
                            console.log(error)
                            const response = new Response(false, "Password Update Failed", "", 500, {});
                            res.send(response);
                        })
                }
                else if (authData.role == "user") {
                    User.findOneAndUpdate({_id: authData.user._id}, {$set: {"local.password":req.body.password}})
                    .then((result) => {
                            // console.log(result)
                            const response = new Response(true, "Password Updated", 200, "", {});
                            res.send(response);
                        }).catch((error) => {
                            console.log(error)
                            const response = new Response(false, "Password Update Failed", 500, "", {});
                            res.send(response);
                        })
                }
                else {
                    const response = new Response(false, "Token mismatched", 403, "", {});
                    res.send(response);
                }
            })
        } else {
            const response = new Response(false, "Token mismatched", 403, "", {});
            res.send(response);
        }
    },
}
