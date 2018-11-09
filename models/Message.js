const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  message: {
    type: String,
    trim: true,
    required: "message is required"
  },
  author: {
    type: String,
    trim: true,
    required: "author is required"
  },
});

module.exports = mongoose.model('Message', messageSchema);