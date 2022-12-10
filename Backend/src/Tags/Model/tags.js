const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema = mongoose.Schema;

// Create a schema
const tagSchema = new Schema({
  title: String,
  createdAt: Date
});

// Create a model
const Tag = mongoose.model('Tag', tagSchema);

// Export the model
module.exports = Tag;