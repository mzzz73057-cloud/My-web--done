const mongoose = require('mongoose');

const wordAttemptSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true,
    },
    word: {
      type: String,
      required: true,
      trim: true,
    },
    ipa: {
      type: String,
      trim: true,
    },
    totalAttempts: {
      type: Number,
      default: 0,
    },
    firstCorrect: {
      type: Boolean,
      default: false,
    },
    mastered: {
      type: Boolean,
      default: false,
    },
    lastScore: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Indexes to speed up queries for adaptive algorithms
wordAttemptSchema.index({ student: 1, lesson: 1, word: 1 });

module.exports = mongoose.model('WordAttempt', wordAttemptSchema);
