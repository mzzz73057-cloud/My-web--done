const express = require('express');
const auth = require('../middleware/auth');
const WordAttempt = require('../models/WordAttempt');

const router = express.Router();

// POST /api/game-results
router.post('/', auth, async (req, res) => {
  const {
    lessonId,
    gameId,
    results // Array: [{ word, ipa, isCorrect, score }]
  } = req.body;

  if (!lessonId || !results || !Array.isArray(results)) {
    return res.status(400).json({ error: 'Invalid game results payload' });
  }

  try {
    // Process each recorded word from the game
    for (const result of results) {
      // Find existing attempt
      let attempt = await WordAttempt.findOne({
        student: req.student._id,
        lesson: lessonId,
        word: result.word
      });

      if (!attempt) {
        attempt = new WordAttempt({
          student: req.student._id,
          lesson: lessonId,
          word: result.word,
          ipa: result.ipa || '',
          totalAttempts: 0,
          firstCorrect: false,
          mastered: false,
          lastScore: 0
        });
      }

      // Update counters
      attempt.totalAttempts += 1;
      attempt.lastScore = result.score || attempt.lastScore;
      
      if (result.isCorrect) {
        if (attempt.totalAttempts === 1) {
          attempt.firstCorrect = true;
        }
        attempt.mastered = true; // Assuming correct in Final Boss => mastered
      }

      await attempt.save();
    }

    return res.json({ status: 'success', message: 'Game results saved successfully' });
  } catch (error) {
    console.error('Error saving game results:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
