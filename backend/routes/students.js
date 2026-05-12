const express = require('express');
const auth = require('../middleware/auth');
const WordAttempt = require('../models/WordAttempt');

const router = express.Router();

// GET /api/students/:id/difficult-words?lessonId=X
router.get('/:id/difficult-words', auth, async (req, res) => {
  const { id } = req.params;
  const { lessonId } = req.query;

  // Security check mapping: if it's not admin, ensure req.student._id matches
  if (req.student && req.student._id.toString() !== id) {
    return res.status(403).json({ error: 'Unauthorized to view these stats' });
  }

  if (!lessonId) {
    return res.status(400).json({ error: 'lessonId query parameter is required' });
  }

  try {
    const attempts = await WordAttempt.find({ student: id, lesson: lessonId });

    // Calculate difficultyScore = totalAttempts + (3 if never firstCorrect) + (2 if not mastered)
    const scoredWords = attempts.map(attempt => {
      let difficultyScore = attempt.totalAttempts;
      if (!attempt.firstCorrect) difficultyScore += 3;
      if (!attempt.mastered) difficultyScore += 2;

      return {
        word: attempt.word,
        ipa: attempt.ipa,
        difficultyScore,
        totalAttempts: attempt.totalAttempts,
        firstCorrect: attempt.firstCorrect,
        mastered: attempt.mastered
      };
    });

    // Sort descending by difficultyScore and take top 10
    scoredWords.sort((a, b) => b.difficultyScore - a.difficultyScore);
    const topDifficult = scoredWords.slice(0, 10);

    return res.json({ difficultWords: topDifficult });
  } catch (error) {
    console.error('Error fetching difficult words:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
