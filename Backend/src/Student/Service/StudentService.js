const Student = require("../Model/student");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");
const Course = require("../../Course/Model/course");
const Module = require("../../Modules/Model/module");
const Doubt = require("../../Doubt/Model/doubt");
const Lecture = require("../../Lecture/Model/lecture");

module.exports = {
  createStudentLocal: async function (email, password, first_name, last_name) {
    try {
      const student = await Student.find({ email: email });
      if (student.length > 0) {
        const response = new Response(
          false,
          "Student already exist with the given email id.",
          503,
          "",
          {}
        );
        return response;
      }
      const studentBody = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        method: "local",
        local: {
          password: password,
        },
      };
      const studentdata = await Student.create(studentBody);

      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: studentdata,
        role: "student",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(
        true,
        "Student created successfully",
        200,
        token,
        {
          first_name: studentdata.first_name,
          student_img: studentdata.student_img
            ? studentdata.student_img
            : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
          id: studentdata.id,
          role: "student"
        }
      );
      return response;
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Student creation failed",
        503,
        "",
        {}
      );
      return response;
    }
  },
  updateStudentLocal: async function (req, res) {
    try {
      const studentdata = await Student.findOneAndUpdate(
        { _id: req.authData.user._id },
        { $set: req.body }
      );
      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: studentdata,
        role: "student",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(
        true,
        "Student updated successfully",
        200,
        token,
        {
          first_name: studentdata.first_name,
          student_img: studentdata.student_img
            ? studentdata.student_img
            : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
          id: studentdata.id,
          role: "student"
        }
      );
      res.send(response);
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  getStudentCourses: async function (req, res) {
    try {
      const studentCourses = await Student.findById(
        req.authData.user._id
      ).populate({
        path: "course",
        model: "Course",
        select: ["thumb", "intro", "rating", "price", "name", "description"],
      });
      const response = new Response(
        true,
        "Student enrolled Course fetched successfully",
        200,
        req.token,
        {
          courses: studentCourses.course,
        }
      );
      res.send(response);
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  getModules: async function (req, res) {
    try {
      const courseId = req.body.courseId;
      const courseModules = await Course.findById(courseId).populate({
        path: "modules",
        model: "Module",
        populate: {
          path: "lectures",
          model: "Lecture",
          select: ["thumb", "name", "description"],
        },
      });
      const response = new Response(
        true,
        "Course Modules fetched successfully",
        200,
        req.token,
        {
          Modules: courseModules.modules,
        }
      );
      res.send(response);
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  addToWishlist: async (req, res) => {
    try {
      const courseId = req.body.courseId;
      Student.findOneAndUpdate(
        { _id: req.authData.user._id },
        { $push: { wishlist: courseId } }
      )
        .then((result) => {
          const response = new Response(
            true,
            "Course added to wishlist successfully.",
            200,
            req.token,
            {}
          );
          res.send(response);
        })
        .catch((err) => {
          console.log(err);
          const response = new Response(
            false,
            "Course not added to wishlist.",
            400,
            req.token,
            {}
          );
          res.send(response);
        });
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  fetchWishlist: async (req, res) => {
    try {
      const courseList = await Student.findById(req.authData.user._id).populate(
        {
          path: "wishlist",
          model: "Course",
          select: ["name", "description", "price", "thumb", "rating", "intro"],
          populate: {
            path: "creator",
            model: "Teacher",
            select: ["first_name", "last_name", "email"],
          },
        }
      );
      const response = new Response(
        true,
        "Fetched wishlisted courses successfully",
        200,
        req.token,
        { wishlistCourses: courseList.wishlist }
      );
      res.send(response);
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  enrollCourse: async (req, res) => {
    try {
      const courseId = req.body.courseId;
      //Payment logic
      Student.findOneAndUpdate(
        { _id: req.authData.user._id },
        { $push: { course: courseId } }
      )
        .then((result) => {
          Course.findOneAndUpdate(
            { _id: courseId },
            { $push: { students: req.authData.user._id } }
          )
            .then((courseResult) => {
              const response = new Response(
                true,
                "Student enrolled in the course successfully.",
                200,
                req.token,
                {}
              );
              res.send(response);
            })
            .catch((err) => {
              const response = new Response(
                true,
                "Student enrolled in the course successfully but studentId not stored in course.",
                200,
                req.token,
                {}
              );
              res.send(response);
            });
        })
        .catch((err) => {
          const response = new Response(
            false,
            "Student not enrolled in the course.",
            400,
            req.token,
            {}
          );
          res.send(response);
        });
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  getLectures: async function (req, res) {
    try {
      const moduleId = req.body.moduleId;
      const moduleLectures = await Module.findById(moduleId).populate({
        path: "lectures",
        model: "Lecture",
        select: ["thumb", "name", "description", 'videoContent','doubts'],
        populate: {
          path: 'doubts',
          model: 'Doubt',
          populate: {
            path: 'reply',
            model: 'Doubt'
          }
        }
      });
      const response = new Response(
        true,
        "Module Lecture fetched successfully",
        200,
        req.token,
        {
          lectures: moduleLectures.lectures,
        }
      );
      return res.send(response);
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  },
  askDoubts: async (req, res)=>{
    try{
      const lectureId = req.body.lectureId;
      const doubtBody = {
        question: req.body.question,
        creator: req.authData.user._id
      }
      Doubt.create(doubtBody).then((result)=>{
        Lecture.findOneAndUpdate({_id: lectureId}, {$push: {doubts: result._id}}).then((lectureResult)=>{
          const response = new Response(true, "Doubt has been submitted and linked to the lecture.", 200, req.token, {result});
          res.send(response);
        }).catch((err)=>{
          console.log(err);
          const response = new Response(true, "Doubt has been submitted but not linked to the lecture.", 200, req.token, {result});
          res.send(response);
        })
      }).catch((err)=>{
        console.log(err);
        const response = new Response(false, "Doubt has not been submitted.", 400, req.token, {});
        res.send(response);
      })
    } catch(err){
      console.log(err);
      const response = new Response(
        false,
        "Something went wrong",
        503,
        req.token,
        {}
      );
      res.send(response);
    }
  }
};
