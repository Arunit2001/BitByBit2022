const express = require("express");
const {
  verifyTokenStudent,
  verifyCourseEnrollment,
  verifyAlreadyCourseEnrollment,
} = require("../../middlewares");
const {
  createStudentLocal,
  updateStudentLocal,
  getStudentCourses,
  getModules,
  addToWishlist,
  fetchWishlist,
  enrollCourse,
} = require("../Service/StudentService");
var router = express.Router();

router.post("/create/local", async function (req, res, next) {
  const { email, password, first_name, last_name } = req.body;
  const response = await createStudentLocal(
    email,
    password,
    first_name,
    last_name
  );
  res.send(response);
});

router.post("/update/local", verifyTokenStudent, updateStudentLocal);

router.get("/courses", verifyTokenStudent, getStudentCourses);

router.post("/modules", verifyTokenStudent, verifyCourseEnrollment, getModules);

router.post("/wishlist", verifyTokenStudent, addToWishlist);

router.get("/wishlist", verifyTokenStudent, fetchWishlist);

router.post("/enroll", verifyTokenStudent, verifyAlreadyCourseEnrollment, enrollCourse);

module.exports = router;
