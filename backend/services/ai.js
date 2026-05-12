// AI scoring with phoneme-level analysis for Children's Day lesson
// Simulates detailed pronunciation feedback with word and phoneme breakdown

const PHONEME_DATA = {
  // Children's rights sentences phoneme analysis
  'I have the right to education.': {
    sentence_id: 'right_to_education',
    words: [
      { word: 'I', score: 95, status: 'correct', phonemes: [{ symbol: 'aɪ', score: 95 }] },
      { word: 'have', score: 92, status: 'correct', phonemes: [{ symbol: 'hæv', score: 92 }] },
      { word: 'the', score: 94, status: 'correct', phonemes: [] },
      { word: 'right', score: 88, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 90 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'education', score: 85, status: 'correct', phonemes: [{ symbol: 'ˌed.jʊˈkeɪ', score: 85 }, { symbol: 'ʃən', score: 82 }] }
    ]
  },
  'Every child has the right to health.': {
    sentence_id: 'right_to_health',
    words: [
      { word: 'Every', score: 95, status: 'correct', phonemes: [{ symbol: 'ˈev', score: 96 }, { symbol: 'ri', score: 94 }] },
      { word: 'child', score: 88, status: 'correct', phonemes: [{ symbol: 'tʃ', score: 82 }, { symbol: 'aɪ', score: 90 }, { symbol: 'ld', score: 92 }] },
      { word: 'has', score: 94, status: 'correct', phonemes: [] },
      { word: 'the', score: 91, status: 'correct', phonemes: [] },
      { word: 'right', score: 89, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 92 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'health', score: 51, status: 'incorrect', phonemes: [{ symbol: 'hel', score: 72 }, { symbol: 'θ', score: 28 }] }
    ]
  },
  'Every child has the right to a name.': {
    sentence_id: 'right_to_name',
    words: [
      { word: 'Every', score: 95, status: 'correct', phonemes: [{ symbol: 'ˈev', score: 96 }, { symbol: 'ri', score: 94 }] },
      { word: 'child', score: 88, status: 'correct', phonemes: [{ symbol: 'tʃ', score: 82 }, { symbol: 'aɪ', score: 90 }, { symbol: 'ld', score: 92 }] },
      { word: 'has', score: 94, status: 'correct', phonemes: [] },
      { word: 'the', score: 91, status: 'correct', phonemes: [] },
      { word: 'right', score: 89, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 92 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'a', score: 93, status: 'correct', phonemes: [{ symbol: 'ə', score: 93 }] },
      { word: 'name', score: 87, status: 'correct', phonemes: [{ symbol: 'neɪ', score: 87 }, { symbol: 'm', score: 90 }] }
    ]
  },
  'Children have the right to life.': {
    sentence_id: 'right_to_life',
    words: [
      { word: 'Children', score: 86, status: 'correct', phonemes: [{ symbol: 'ˈtʃɪl', score: 85 }, { symbol: 'drən', score: 87 }] },
      { word: 'have', score: 92, status: 'correct', phonemes: [{ symbol: 'hæv', score: 92 }] },
      { word: 'the', score: 94, status: 'correct', phonemes: [] },
      { word: 'right', score: 89, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 92 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'life', score: 78, status: 'correct', phonemes: [{ symbol: 'laɪ', score: 78 }, { symbol: 'f', score: 85 }] }
    ]
  },
  'We have the right to love and care.': {
    sentence_id: 'right_to_love_and_care',
    words: [
      { word: 'We', score: 95, status: 'correct', phonemes: [{ symbol: 'wiː', score: 95 }] },
      { word: 'have', score: 92, status: 'correct', phonemes: [{ symbol: 'hæv', score: 92 }] },
      { word: 'the', score: 94, status: 'correct', phonemes: [] },
      { word: 'right', score: 89, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 92 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'love', score: 82, status: 'correct', phonemes: [{ symbol: 'lʌ', score: 82 }, { symbol: 'v', score: 88 }] },
      { word: 'and', score: 93, status: 'correct', phonemes: [{ symbol: 'æn', score: 93 }, { symbol: 'd', score: 95 }] },
      { word: 'care', score: 88, status: 'correct', phonemes: [{ symbol: 'keə', score: 88 }, { symbol: 'r', score: 90 }] }
    ]
  },
  'Children have the right to play.': {
    sentence_id: 'right_to_play',
    words: [
      { word: 'Children', score: 86, status: 'correct', phonemes: [{ symbol: 'ˈtʃɪl', score: 85 }, { symbol: 'drən', score: 87 }] },
      { word: 'have', score: 92, status: 'correct', phonemes: [{ symbol: 'hæv', score: 92 }] },
      { word: 'the', score: 94, status: 'correct', phonemes: [] },
      { word: 'right', score: 89, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 92 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'play', score: 91, status: 'correct', phonemes: [{ symbol: 'pleɪ', score: 91 }] }
    ]
  },
  'She has the right to clothing and a home.': {
    sentence_id: 'right_to_clothing_and_home',
    words: [
      { word: 'She', score: 94, status: 'correct', phonemes: [{ symbol: 'ʃiː', score: 94 }] },
      { word: 'has', score: 94, status: 'correct', phonemes: [] },
      { word: 'the', score: 91, status: 'correct', phonemes: [] },
      { word: 'right', score: 89, status: 'correct', phonemes: [{ symbol: 'raɪ', score: 88 }, { symbol: 't', score: 92 }] },
      { word: 'to', score: 96, status: 'correct', phonemes: [] },
      { word: 'clothing', score: 83, status: 'correct', phonemes: [{ symbol: 'ˈkləʊ', score: 85 }, { symbol: 'ðɪŋ', score: 81 }] },
      { word: 'and', score: 93, status: 'correct', phonemes: [{ symbol: 'æn', score: 93 }, { symbol: 'd', score: 95 }] },
      { word: 'a', score: 93, status: 'correct', phonemes: [{ symbol: 'ə', score: 93 }] },
      { word: 'home', score: 89, status: 'correct', phonemes: [{ symbol: 'həʊ', score: 89 }, { symbol: 'm', score: 92 }] }
    ]
  }
};

const PHONEME_TIPS = {
  'θ': { tip: "Touch your tongue to your top teeth and breathe out for the 'th' sound!", audio: "/audio/tips/voiced_th.mp3" },
  'ð': { tip: "Touch your tongue to your top teeth and breathe out gently for the 'th' sound!", audio: "/audio/tips/voiced_th.mp3" },
  'ʃ': { tip: "Make a 'shh' sound like a secret - tongue close to roof of mouth!", audio: "/audio/tips/sh_sound.mp3" },
  'tʃ': { tip: "Press your tongue against the roof of your mouth and release quickly for 'ch'!", audio: "/audio/tips/ch_sound.mp3" },
  'dʒ': { tip: "Press your tongue against the roof of your mouth and release for 'j' sound!", audio: "/audio/tips/j_sound.mp3" },
  'aɪ': { tip: "Say 'eye' - start with 'ah' and glide up to 'ee'!", audio: "/audio/tips/ai_diphthong.mp3" },
  'ʌ': { tip: "Say a quick 'uh' sound - short and round like a surprised 'oh'!", audio: "/audio/tips/uh_vowel.mp3" },
  'eɪ': { tip: "Say 'ay' like in 'day' - start with 'eh' and glide to 'ee'!", audio: "/audio/tips/ay_diphthong.mp3" },
  'ə': { tip: "Make a quick 'uh' sound - very short and relaxed!", audio: "/audio/tips/schwa.mp3" },
  'v': { tip: "Touch your top teeth to your bottom lip and vibrate for 'v'!", audio: "/audio/tips/v_sound.mp3" },
  'f': { tip: "Touch your top teeth to your bottom lip and breathe out for 'f'!", audio: "/audio/tips/f_sound.mp3" }
};

function calculateOverallScore(words) {
  const totalScore = words.reduce((sum, word) => sum + word.score, 0);
  return Math.round(totalScore / words.length);
}

function findTopErrorPhoneme(words) {
  let lowestScore = 100;
  let errorPhoneme = null;

  words.forEach(word => {
    word.phonemes.forEach(phoneme => {
      if (phoneme.score < lowestScore) {
        lowestScore = phoneme.score;
        errorPhoneme = phoneme.symbol;
      }
    });
  });

  return errorPhoneme;
}

function getBaloonaMood(score) {
  if (score >= 90) return 'celebrating';
  if (score >= 75) return 'happy';
  if (score >= 55) return 'encouraging';
  return 'supportive';
}

function calculateXP(score) {
  if (score >= 90) return 25;
  if (score >= 75) return 18;
  if (score >= 55) return 10;
  return 5;
}

function shouldReleaseBalloon(score) {
  return score >= 70;
}

/**
 * Returns detailed phoneme-level scoring for Children's Day sentences
 * @param {Object} params
 * @param {string} params.audioUrl - URL to the audio recording
 * @param {string} params.expectedText - Expected transcription
 */
async function scorePronunciation({ audioUrl, expectedText }) {
  // Check if this is a Children's Day sentence
  const sentenceData = PHONEME_DATA[expectedText];

  if (sentenceData) {
    // Return detailed phoneme analysis
    const overallScore = calculateOverallScore(sentenceData.words);
    const topErrorPhoneme = findTopErrorPhoneme(sentenceData.words);
    const tipData = PHONEME_TIPS[topErrorPhoneme] || { tip: 'Great effort! Keep practicing.', audio: null };

    return {
      sentence_id: sentenceData.sentence_id,
      overall_score: overallScore,
      words: sentenceData.words,
      top_error_phoneme: topErrorPhoneme,
      tip: tipData.tip,
      tip_audio_url: tipData.audio,
      xp_awarded: calculateXP(overallScore),
      badge_unlocked: null, // Would be determined by user progress
      balloon_released: shouldReleaseBalloon(overallScore),
      baloona_mood: getBaloonaMood(overallScore)
    };
  }

  // Fallback for non-Children's Day content
  const pronunciationScore = Math.min(100, Math.max(0, 70 + Math.floor(Math.random() * 31)));
  const fluencyScore = Math.max(0, pronunciationScore - Math.floor(Math.random() * 10));
  const overallScore = Math.round((pronunciationScore + fluencyScore) / 2);

  const hints = [];
  if (pronunciationScore < 70) {
    hints.push('Try speaking more slowly and articulate each word clearly.');
  }
  if (fluencyScore < 70) {
    hints.push('Try to keep a more consistent rhythm.');
  }

  return {
    score: overallScore,
    pronunciationScore,
    fluencyScore,
    feedback: hints.length ? hints.join(' ') : 'Good job! Keep it up.',
  };
}

module.exports = {
  scorePronunciation,
};
