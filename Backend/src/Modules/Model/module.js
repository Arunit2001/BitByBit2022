const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema   = mongoose.Schema;

// Create a schema
const moduleSchema = new Schema({
  lectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  }],
  name: String,
  

  createdAt: Date
});

// Create a model

const Module = mongoose.model('Module', moduleSchema);

// Export the model
module.exports = Module;