const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  // Add more fields as needed for user profile
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
