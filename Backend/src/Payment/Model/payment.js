const mongoose = require('mongoose');
// const bcrypt   = require('bcrypt');
const Schema   = mongoose.Schema;

// Create a schema
const paymentSchema = new Schema({
  senderId: mongoose.ObjectId,
  recieverId: mongoose.ObjectId,
  relation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }],
  amount: String,
  status: String,
  message: String,
  createdAt: Date
});

// Create a model
const Payment = mongoose.model('Payment', paymentSchema);

// Export the model
module.exports = Payment;