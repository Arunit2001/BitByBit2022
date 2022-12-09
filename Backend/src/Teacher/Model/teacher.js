const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema   = mongoose.Schema;

// Create a schema
const teacherSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google'],
    required: true
  },
  local: {
    password: { 
      type: String
    }
  },
  google: {
    id: {
      type: String
    }
  },
  email: {
    type: String,
    lowercase: true
  },
  first_name: String,
  last_name: String,
  teacher_img: String,
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
  bank_account_no: String,
  bank_IFSC: String,
  UPI_id: String,
  createdAt: Date
});

// Create a model
const Teacher = mongoose.model('teacher', teacherSchema);

// Export the model
module.exports = Teacher;