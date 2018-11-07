const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const AdvisorSchema = new Schema({
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
    default: 'type2'
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }] 
});

AdvisorSchema.plugin(passportLocalMongoose);

const Advisor = mongoose.model("Advisor", AdvisorSchema);

module.exports = Advisor;