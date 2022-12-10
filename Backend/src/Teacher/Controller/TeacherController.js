const express = require('express');
const { verifyTokenTeacher, verifyCourseOwnership } = require('../../middlewares');
const { createTeacherLocal, updateTeacherLocal, createCourse, getTeacherCourses, createModule, getModules, addLecture, updateLecture, getCourseStats } = require('../Service/TeacherService');
var router = express.Router();

router.post('/create/local',async function(req,res,next){
    const {email, password, first_name, last_name} = req.body;
    const response = await createTeacherLocal(email, password, first_name, last_name);
    res.send(response);
});

router.post('/update/local', verifyTokenTeacher, updateTeacherLocal)

router.post('/create/course', verifyTokenTeacher, createCourse)

router.get('/courses', verifyTokenTeacher, getTeacherCourses)

router.post('/create/module', verifyTokenTeacher, verifyCourseOwnership, createModule)

router.post('/modules', verifyTokenTeacher, verifyCourseOwnership, getModules)

router.post('/add/lecture', verifyTokenTeacher, verifyCourseOwnership, addLecture)

router.post('/update/lecture', verifyTokenTeacher, verifyCourseOwnership, updateLecture)

router.post('/stats', verifyTokenTeacher, verifyCourseOwnership, getCourseStats)

module.exports = router;