/**
 * Client-side speaking checks: Web Speech API transcript vs expected text,
 * plus simple mic energy to reduce "score with no real attempt" cases.
 */

export function normalizeText(text) {
  return (text || '')
    .trim()
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[.,!?;:—–-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function computeScoreFromTranscript(expected, actual) {
  if (!expected) return { score: 50, good: false };
  const exp = normalizeText(expected);
  const act = normalizeText(actual);
  if (!act) return { score: 40, good: false };

  if (exp === act) return { score: 95, good: true };

  const wordsExp = exp.split(' ').filter(Boolean);
  const wordsAct = act.split(' ').filter(Boolean);
  const common = wordsExp.filter((w) => wordsAct.includes(w)).length;
  const ratio = common / Math.max(wordsExp.length, 1);

  const score = Math.min(90, Math.max(20, Math.round(ratio * 100)));
  return { score, good: ratio >= 0.6 };
}

export function supportsSpeechRecognition() {
  return typeof window !== 'undefined' && !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

/** Normalized RMS ~0–1 from time-domain analyser data */
function sampleRms(analyser, data) {
  analyser.getByteTimeDomainData(data);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    const v = (data[i] - 128) / 128;
    sum += v * v;
  }
  return Math.sqrt(sum / data.length);
}

// Below this average RMS we treat the take as "no clear speech" if transcript is also weak
const RMS_THRESHOLD = 0.014;
const MIN_TRANSCRIPT_CHARS = 2;

/**
 * Starts the microphone and speech recognition. Call stop(expectedText) when the learner finishes.
 * @returns {{ stop: (expectedText: string) => Promise<{ score: number, transcript: string, noSpeech: boolean, unsupported: boolean, micError: boolean }> }}
 */
export async function createSpeakingAssessment() {
  if (!supportsSpeechRecognition()) {
    return {
      stop: async () => ({
        score: 42,
        transcript: '',
        noSpeech: false,
        unsupported: true,
        micError: false,
      }),
    };
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;

  let transcript = '';
  recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        const piece = event.results[i][0]?.transcript?.trim() || '';
        if (piece) transcript = `${transcript} ${piece}`.trim();
      }
    }
  };

  // Must call start() in the same synchronous turn as the user click — not after an await —
  // or Chromium blocks / no-ops recognition (mic appears "dead").
  let recognitionStarted = false;
  try {
    recognition.start();
    recognitionStarted = true;
  } catch (e) {
    console.warn('SpeechRecognition.start failed', e);
  }

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (e) {
    try {
      recognition.stop();
    } catch {
      /* ignore */
    }
    throw e;
  }

  if (!recognitionStarted) {
    stream.getTracks().forEach((t) => t.stop());
    throw new Error('SPEECH_RECOGNITION_START_FAILED');
  }

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  source.connect(analyser);
  const td = new Uint8Array(analyser.frequencyBinCount);

  await audioCtx.resume().catch(() => {});

  const rmsSamples = [];
  let rafId = 0;
  const loop = () => {
    rmsSamples.push(sampleRms(analyser, td));
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);

  const cleanupAudio = () => {
    cancelAnimationFrame(rafId);
    stream.getTracks().forEach((t) => t.stop());
    audioCtx.close().catch(() => {});
  };

  const buildResult = (expectedText) => {
    const avgRms = rmsSamples.length
      ? rmsSamples.reduce((a, b) => a + b, 0) / rmsSamples.length
      : 0;
    const trimmed = transcript.trim();
    const weakAudio = avgRms < RMS_THRESHOLD;
    const weakText = trimmed.length < MIN_TRANSCRIPT_CHARS;

    if (weakAudio && weakText) {
      return {
        score: 32,
        transcript: trimmed,
        noSpeech: true,
        unsupported: false,
        micError: false,
      };
    }

    if (!trimmed) {
      return {
        score: 36,
        transcript: '',
        noSpeech: true,
        unsupported: false,
        micError: false,
      };
    }

    const { score } = computeScoreFromTranscript(expectedText, trimmed);
    return {
      score,
      transcript: trimmed,
      noSpeech: false,
      unsupported: false,
      micError: false,
    };
  };

  return {
    stop: (expectedText) =>
      new Promise((resolve) => {
        let settled = false;
        const settle = (payload) => {
          if (settled) return;
          settled = true;
          cleanupAudio();
          resolve(payload);
        };

        recognition.onerror = (event) => {
          console.warn('SpeechRecognition error', event.error);
        };

        recognition.onend = () => {
          settle(buildResult(expectedText));
        };

        try {
          recognition.stop();
        } catch {
          settle(buildResult(expectedText));
        }
      }),
  };
}
