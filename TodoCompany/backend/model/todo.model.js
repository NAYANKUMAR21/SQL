const mongoose = require('mongoose');
const file = {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  title: { type: String },
  isCompleted: {
    type: Boolean,
    require: true,
    enum: [false, true],
    default: false,
  },
};
const todoSchema = new mongoose.Schema(file, {
  versionKey: false,
  timestamps: true,
});
const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;
