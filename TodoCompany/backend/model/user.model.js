const mongoose = require('mongoose');
const file = {
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
};
const userSchema = new mongoose.Schema(file, {
  versionKey: false,
  timestamps: true,
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
