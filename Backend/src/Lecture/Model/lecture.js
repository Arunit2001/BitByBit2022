const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema   = mongoose.Schema;

// Create a schema
const lectureSchema = new Schema({
  doubts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doubt"
  }],
  thumb: String,

  videoContent: String,

  name: String,
  description: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },
  createdAt: Date
});

// Create a model

const Lecture = mongoose.model('Lecture', lectureSchema);

// Export the model
module.exports = Lecture;