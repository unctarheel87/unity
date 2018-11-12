const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: false,
    trim: true
  },
  userType: {
    type: String,
    default: 'type1'
  },
  advisor: {
    type: String,
    trim: true
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }],
  stocks: [{
    type: Schema.Types.ObjectId,
    ref: "Stock"
  }] 
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;