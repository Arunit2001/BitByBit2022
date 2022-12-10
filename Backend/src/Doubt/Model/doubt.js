const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema = mongoose.Schema;

// Create a schema
const doubtSchema = new Schema({
  question: String,
  reply: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doubt"
  },
  creator: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],
  createdAt: Date
});

// Create a model

const Doubt = mongoose.model('Doubt', doubtSchema);


// Export the model
module.exports = Doubt;