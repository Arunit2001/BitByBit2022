const mongoose = require("mongoose");
// const bcrypt   = require('bcrypt');
const Schema = mongoose.Schema;

// Create a schema
const studentSchema = new Schema({
  method: {
    type: String,
    enum: ["local", "google"],
    required: true,
  },
  local: {
    password: {
      type: String,
    },
  },
  google: {
    id: {
      type: String,
    },
  },
  email: {
    type: String,
    lowercase: true,
  },
  first_name: String,
  last_name: String,
  student_img: String,
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }],
  payment_history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment"
  }],
  institute_name: String,
  phone_number: String,
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }],
  createdAt: Date,
});

// Create a model
const Student = mongoose.model("Student", studentSchema);

// Export the model
module.exports = Student;
