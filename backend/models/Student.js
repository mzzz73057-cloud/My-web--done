const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  passwordHash: { type: String, required: true },
  fullName: { type: String, default: '' },
  // Grade is no longer required at account creation because a new user
  // picks it later in the app.  keep the same enum but allow `null` and
  // don't enforce `required` outright.  we also make it conditionally
  // required for students if you want additional validation logic later.
  grade: {
    type: Number,
    enum: [4, 5, 6],
    default: null,
    // if you ever want to enforce that only students must have a grade,
    // you could use `required: function() { return this.role === 'student'; }`
  },
  role: { type: String, enum: ['student', 'teacher'], default: 'student' },
  avatar: { type: String, default: '' },
  points: { type: Number, default: 0 },
  badges: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

module.exports = mongoose.model('Student', StudentSchema);
