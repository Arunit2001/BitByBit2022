const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Response = require('../util/response');
const Admin = require('./Admin/Model/admin');
const Course = require('./Course/Model/course');
const Student = require('./Student/Model/student');
const Teacher = require('./Teacher/Model/teacher');

module.exports = {
    verifyTokenAdmin: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                if (err) {
                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
                else if (authData.role == "admin") {
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
    verifyTokenStudent: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                if (err) {
                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
                else if (authData.role == "student" || authData.role == "admin") {
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
    verifyTokenTeacher: function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[0];
            console.log(bearerHeader)
            req.token = bearerToken;
            jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
                if (err) {
                    const response = new Response(false, "Please Login", 403, "", {});
                    res.send(response);
                }
                else if (authData.role == "teacher" || authData.role == "admin") {
                    req.authData = authData
                    console.log("req AuthData",req.authData);
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
    // verifyTokenResetPassword: async function (req, res, next) {
    //     const bearerHeader = req.headers['authorization'];
    //     if (typeof bearerHeader !== 'undefined') {
    //         const bearer = bearerHeader.split(' ')
    //         const bearerToken = bearer[0];
    //         console.log(bearerHeader)
    //         req.token = bearerToken;
    //         jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
    //             if (err) {
    //                 res.send(403)
    //             }
    //             else if (authData.role == "admin") {
    //                 req.authData = authData;
    //                 console.log("authdata",authData)
    //                 Admin.findOneAndUpdate({ _id: authData.user._id}, {$set: {"local.password":req.body.password}})
    //                 .then((result) => {
    //                         // console.log(result)
    //                         const response = new Response(true, "Password Updated", 200, "", {});
    //                         res.send(response);
    //                     }).catch((error) => {
    //                         console.log(error)
    //                         const response = new Response(false, "Password Update Failed", "", 500, {});
    //                         res.send(response);
    //                     })
    //             }
    //             else if (authData.role == "user") {
    //                 req.authData = authData;
    //                 console.log("authdata",authData)
    //                 User.findOneAndUpdate({_id: authData.user._id}, {$set: {"local.password":req.body.password}})
    //                 .then((result) => {
    //                         // console.log(result)
    //                         const response = new Response(true, "Password Updated", 200, "", {});
    //                         res.send(response);
    //                     }).catch((error) => {
    //                         console.log(error)
    //                         const response = new Response(false, "Password Update Failed", 500, "", {});
    //                         res.send(response);
    //                     })
    //             }
    //             else {
    //                 const response = new Response(false, "Token mismatched", 403, "", {});
    //                 res.send(response);
    //             }
    //         })
    //     } else {
    //         const response = new Response(false, "Token mismatched", 403, "", {});
    //         res.send(response);
    //     }
    // },
    verifyCourseOwnership: async (req, res, next)=>{
        try{
            const courseInfo = await Course.findById(req.body.courseId);
            if(courseInfo.creator==req.authData.user._id){
                console.log("Ownership verified");
                next();
            }else{
                const response = new Response(false, "User don't have access of this course", 403, "", {});
                res.send(response);
            }
        }catch(err){
            console.log(err);
            const response = new Response(false, "Course Id not matching", 403, "", {});
            res.send(response);
        }
    },
    verifyCourseEnrollment: async (req, res, next)=>{
        try{
            const enrolledCourses = await Student.findById(req.authData.user._id);
            enrolledCourses.course.map((ele)=>{
                if(ele==req.body.courseId){
                    next();
                }
            })
            const response = new Response(false, "User don't have access of this course", 403, "", {});
            res.send(response);
        }catch(err){
            console.log(err);
            const response = new Response(false, "Something went wrong", 403, "", {});
            res.send(response);
        }
    },
    verifyAlreadyCourseEnrollment: async (req, res, next)=>{
        try{
            const enrolledCourses = await Student.findById(req.authData.user._id);
            let flag = false;
            enrolledCourses.course.map((ele)=>{
                if(ele==req.body.courseId){
                    flag = true;
                    const response = new Response(false, "User is already enrolled in this course", 403, "", {});
                    return res.send(response);
                }
            })
            if(!flag){
                next();
            }
        }catch(err){
            console.log(err);
            const response = new Response(false, "Something went wrong", 403, "", {});
            res.send(response);
        }
    }
}
