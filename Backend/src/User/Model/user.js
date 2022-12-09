const mongoose = require("mongoose");
// const bcrypt   = require('bcrypt');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
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
  user_img: String,
  createdAt: Date,
});

// Create a model
const User = mongoose.model("user", userSchema);

// Export the model
module.exports = User;
