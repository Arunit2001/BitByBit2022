const Teacher = require("../Model/teacher");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");
const Course = require("../../Course/Model/course");
const Module = require("../../Modules/Model/module");
const Lecture = require("../../Lecture/Model/lecture");

module.exports = {
  createTeacherLocal: async function (email, password, first_name, last_name) {
    try {
      const teacher = await Teacher.find({ email: email });
      if (teacher.length > 0) {
        const response = new Response(
          false,
          "Teacher already exist with the given email id.",
          503,
          "",
          {}
        );
        return response;
      }
      const teacherBody = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        method: "local",
        local: {
          password: password,
        },
      };
      const teacherdata = await Teacher.create(teacherBody);

      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: teacherdata,
        role: "teacher",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(
        true,
        "Teacher created successfully",
        200,
        token,
        {
          first_name: teacherdata.first_name,
          other_img: teacherdata.teacher_img
            ? teacherdata.other_img
            : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
          id: teacherdata.id,
        }
      );
      return response;
    } catch (err) {
      console.log(err);
      const response = new Response(false, "Something went wrong", 503, "", {});
      return response;
    }
  },
  updateTeacherLocal: async function (req, res) {
    try {
      const teacherdata = await Teacher.findOneAndUpdate(
        { _id: req.authData.user._id },
        { $set: req.body }
      );
      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: teacherdata,
        role: "teacher",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(
        true,
        "Teacher updated successfully",
        200,
        token,
        {
          first_name: teacherdata.first_name,
          other_img: teacherdata.teacher_img
            ? teacherdata.teacher_img
            : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
          id: teacherdata.id,
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
  createCourse: async function (req, res) {
    try {
      const courseBody = req.body;
      courseBody.creator = req.authData.user._id;
      Course.create(courseBody)
        .then((result) => {
          Teacher.findOneAndUpdate(
            { _id: req.authData.user._id },
            { $push: { course: result._id } }
          )
            .then((teacherResult) => {
              const response = new Response(
                true,
                "Course created successfully and linked to teacher.",
                200,
                req.token,
                result
              );
              res.send(response);
            })
            .catch((err) => {
              console.log(err);
              const response = new Response(
                true,
                "Course created successfully but linking with teacher failed.",
                200,
                req.token,
                result
              );
              res.send(response);
            });
        })
        .catch((err) => {
          console.log(err);
          const response = new Response(
            false,
            "Course creation failed.",
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
  getTeacherCourses: async function (req, res) {
    try {
      const teacherCourses = await Teacher.findById(
        req.authData.user._id
      ).populate({
        path: "course",
        model: "Course",
        select: ["thumb", "intro", "rating", "price", "name", "description"],
      });
      const response = new Response(
        true,
        "Teacher Course fetched successfully",
        200,
        req.token,
        {
          courses: teacherCourses.course,
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
  createModule: async function (req, res) {
    try {
      const moduleBody = req.body.module;
      Module.create(moduleBody)
        .then((result) => {
          Course.findOneAndUpdate(
            { _id: req.body.courseId },
            { $push: { modules: result._id } }
          )
            .then((courseResult) => {
              const response = new Response(
                true,
                "Module created successfully and linked to course.",
                200,
                req.token,
                result
              );
              res.send(response);
            })
            .catch((err) => {
              console.log(err);
              const response = new Response(
                true,
                "Module created successfully but linking with Course failed.",
                200,
                req.token,
                result
              );
              res.send(response);
            });
        })
        .catch((err) => {
          console.log(err);
          const response = new Response(
            false,
            "Module creation failed.",
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
  getModules: async function (req, res) {
    try {
      const courseId = req.body.courseId;
      const courseModules = await Course.findById(courseId)
        .populate({
          path: "modules",
          model: "Module",
          populate:{
            path: "lectures",
            model: "Lecture",
            select: ["thumb", "name", "description", "videoContent"]
          }
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
  addLecture: async function (req, res) {
    try {
      const lectureBody = {
        thumb: req.body.lecture.thumb,
        description: req.body.lecture.description,
        name: req.body.lecture.name,
        videoContent: req.body.lecture.videoContent,
        creator: req.authData.user._id,
      };
      Lecture.create(lectureBody)
        .then((result) => {
          Module.findOneAndUpdate(
            { _id: req.body.moduleId },
            { $push: { lectures: result._id } }
          )
            .then((moduleResult) => {
              const response = new Response(
                true,
                "Lecture added successfully and linked to module.",
                200,
                req.token,
                result
              );
              res.send(response);
            })
            .catch((err) => {
              console.log(err);
              const response = new Response(
                true,
                "Lecture added successfully but linking with module failed.",
                200,
                req.token,
                result
              );
              res.send(response);
            });
        })
        .catch((err) => {
          console.log(err);
          const response = new Response(
            false,
            "Lecture addition failed.",
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
};
