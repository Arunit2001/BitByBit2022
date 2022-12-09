const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema   = mongoose.Schema;

// Create a schema
const courseSchema = new Schema({
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module"
  }],
  intro: String,
  rating: String,
  price: String,
  createdAt: Date
});

// Create a model
const Course = mongoose.model('course', courseSchema);

// Export the model
module.exports = Course;