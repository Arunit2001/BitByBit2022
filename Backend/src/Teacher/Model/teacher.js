const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema   = mongoose.Schema;

// Create a schema
const otherSchema = new Schema({
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
  createdAt: Date
});

// Create a model
const Other = mongoose.model('other', otherSchema);

// Export the model
module.exports = Other;