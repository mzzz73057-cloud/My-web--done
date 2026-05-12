# Product Requirements Document (PRD)
# *Prononsiha* — Gamified English Pronunciation & Speaking Fluency Platform
### Prepared for: FYP Chapter 3 — Methodology (APA 7th Edition Reference)
### Date: May 2026

---

## 1. Product Overview

**Product Name:** Prononsiha
**Platform Type:** Web-based, browser-accessible educational application
**Target Users:** Tunisian primary school students (6th Grade, approximately 11–12 years old) learning English as a Foreign Language (EFL)
**Core Purpose:** To develop and improve English speaking fluency and pronunciation confidence through structured, gamified, interactive lesson activities aligned with the Tunisian 6th-grade national English curriculum (Unit 5 – *Celebrations*).

---

## 2. System Navigation & User Flow

The platform follows a strict, linear navigation path. Each screen is a gate that the student must pass through in order before accessing lesson content. The complete user journey is as follows:

```
Landing Page → Login/Sign-Up → Practice Mode Selection
→ Grade Selection → Unit Selection → Lesson Selection → Lesson Page → Game Page
```

---

## 3. Screen-by-Screen Functional Description

### 3.1 Landing Page (`/`)

The Landing Page is the entry point of the platform. It displays:

- The platform name **"Prononsiha"** rendered in large, styled text (gold colour with decorative font), centrally positioned over a classroom-themed background image.
- An **"About Us"** button positioned on the top-left area, navigating to the informational About Us page.
- Two action buttons at the bottom-centre of the screen:
  - **"Log In"** — navigates to the authentication screen.
  - **"Sign Up"** — also navigates to the authentication screen (sign-up mode).

Both buttons use a pill-shaped design with animated hover and press effects (a 3D push-down motion). No lesson content is accessible from this page. The page is fully public and requires no authentication.

---

### 3.2 Authentication Page (`/login`)

The Login/Sign-Up page serves as the single authentication gateway. It uses a horizontal two-panel card layout with a semi-transparent glass effect (glassmorphism) displayed over a classroom background image.

**Left Panel – Branding & Mode Toggle:**
- Displays a rocket emoji (🚀) and the label "SpeakUp!" as a sub-brand identity.
- Shows a context-sensitive greeting: *"Welcome Back!"* (for login) or *"Join the Fun!"* (for sign-up).
- Contains a motivational sub-text adapting to the selected mode.
- Provides two toggle buttons — **"Log In"** and **"Sign Up"** — to switch between modes without navigating away.

**Right Panel – Form:**

*Login mode* collects:
- Username
- Password

*Sign-up mode* additionally collects:
- Full Name
- Role selector (Student / Teacher)

Upon successful authentication, the user is redirected to the Practice Mode Page. A JWT (JSON Web Token) is stored in the browser's local storage and used to authenticate all subsequent protected pages. If the token is absent, the user is automatically redirected back to the login page.

Error messages (e.g., wrong password, username taken) are displayed inline below the form fields.

---

### 3.3 Practice Mode Page (`/practice-mode`) *(Protected)*

This page presents two practice modality options displayed as interactive buttons over a colourful classroom background image:

- **"Practice Alone"** (blue button with microphone icon) — proceeds to the Grade Selection page for individual self-paced practice.
- **"Practice With Friends"** (amber/yellow button with users icon) — reserved for future collaborative features; currently shows an informational alert.

This page is **protected**: unauthenticated users are automatically redirected to the login page.

---

### 3.4 Grade Selection Page (`/grades`) *(Protected)*

This page allows the student to choose their academic grade level. Three grade buttons are displayed horizontally over a themed background:

| Button | Status |
|---|---|
| 4th Grade | Placeholder (not yet available) |
| 5th Grade | Placeholder (not yet available) |
| **6th Grade** | **Fully functional — leads to Unit Selection** |

Only the **6th Grade** button is active and navigates forward. The other two display an informational alert. A back-navigation arrow button (orange circle) is fixed to the top-left, and a "Back to Main Menu" button is fixed to the bottom-centre.

---

### 3.5 Unit Selection Page (`/units/:grade`) *(Protected)*

This page displays a 3×2 grid of six coloured unit cards, each representing a thematic unit from the 6th-grade Tunisian English curriculum:

| Unit | Theme | Emoji | Status |
|---|---|---|---|
| Unit I | Entertaining Myself | 🎮 | Coming soon |
| Unit II | Keeping Fit | 🏋️ | Coming soon |
| Unit III | Having Fun in the Seasons | ❄️ | Coming soon |
| Unit IV | Caring | ❤️ | Coming soon |
| **Unit V** | **Celebrations** | 🎉 | **Fully active** |
| Unit VI | Going Shopping | 🛒 | Coming soon |

Each card is a large, coloured 3D-effect button (200×200 px) with a gradient background, bold unit number, emoji icon, and theme title. Cards animate on hover (lift and scale effect). Only **Unit V (Celebrations)** is active and navigates to the Lesson Selection page. All others display an alert. A back-navigation button is fixed at the top-left.

---

### 3.6 Lesson Selection Page (`/lessons/:grade/:unitNumber`) *(Protected)*

This page lists all five lessons within Unit V as pill-shaped, horizontally-spaced buttons stacked vertically. Each button features:
- A microphone icon on the left (indicating oral/speaking activity).
- The lesson title centred.
- A waveform icon on the right.
- A unique gradient colour per lesson.

| # | Lesson Title | Gradient |
|---|---|---|
| 1 | Children's Day | Pink → Yellow |
| 2 | Mother's Day | Green gradient |
| 3 | Happy New Year | Blue gradient |
| 4 | Teacher's Day | Red gradient |
| 5 | End of School Year Party | Yellow → Orange |

Clicking any lesson navigates to its dedicated Lesson Page. A back arrow button (red circle) is positioned at the top-left.

---

## 4. Core Learning Pages — Lesson Pages (Unit V, Lessons 1–5)

All five lessons share an identical structure and pedagogical design. Each lesson page is a self-contained interactive HTML environment embedded within the platform. The content is aligned with the Tunisian 6th-grade EFL textbook (*My English Book 6*).

### 4.1 Lesson Page Structure

Each lesson page consists of the following sections, rendered from top to bottom:

#### A. Top Navigation Bar (Sticky)
A dark green header that remains fixed at the top of the screen as the student scrolls. It contains:
- **Platform logo** — "SpeakUp!" with the lesson subtitle (e.g., "Unit 5 · Lesson 1").
- **Gamification score counters** — three live counters displayed as pill badges:
  - ⭐ Stars (awarded for correct pronunciation attempts)
  - 🔥 Fire/Streak (tracks consecutive correct answers)
  - 💎 Gems (awarded for high-quality performances)

#### B. XP Progress Bar
Immediately below the top bar, a horizontal experience points (XP) bar shows the student's current session XP progress (e.g., "47 / 100"). The bar fills from left to right with a gold gradient animation as XP is earned.

#### C. Lesson Header Card
A white card containing:
- A thematic emoji icon (e.g., 🎈 for Children's Day).
- The lesson title and sub-heading (unit, lesson number, and textbook page reference, e.g., "Unit 5 · Lesson 1 · pp.125–127").
- A **Learning Objective box** (green background) stating what the student will accomplish (e.g., "Talk about children's rights using 'I have the right to…' and describe Children's Day with adjectives").
- A **progress dot strip** — a row of small coloured dots indicating overall lesson completion progress.

#### D. Pronunciation Note
A highlighted green information box displaying the key pronunciation focus from the textbook's "Let's Pronounce" section. Words are grouped by their vowel sound patterns (e.g., the /aɪ/ sound: *life, right, sick, child*), with the target vowel underlined in colour.

#### E. Mode Switcher
Two tabs that toggle the entire content area below:
- **"🔤 Vocabulary Practice"** — the default mode; always unlocked.
- **"💬 Sentence Practice"** — initially locked (🔒) until all vocabulary words are mastered.

A yellow lock banner below the tabs shows real-time progress (e.g., "0 / 36 words mastered") and shakes with an animation if the student attempts to access Sentence Practice before completing Vocabulary.

---

### 4.2 Vocabulary Practice Mode

This is the first learning mode. It contains all theme vocabulary words from the lesson.

#### Word Grid
A responsive grid of vocabulary cards is displayed. Each card shows:
- The word broken into syllables with dots (e.g., "ed·u·CA·tion"), with the **stressed syllable** rendered in larger, underlined, gold-highlighted text.
- The word's phonetic IPA transcription (e.g., / ˌed.jʊˈkeɪ.ʃən /).
- A colour-coded part-of-speech badge (green = verb, blue = noun, yellow = adjective, purple = rights vocabulary).
- A checkmark (✓) when the word has been mastered.

**Category Filter Tabs** above the grid allow the student to filter words by:
- 🌍 All Words
- ✊ Rights vocabulary
- 🏃 Verbs
- 🌈 Adjectives
- 📍 Nouns

Each lesson contains between 28–40 vocabulary words.

#### Word Activity Panel
When the student taps a word card, it becomes selected (highlighted in red) and an activity panel below updates to show three interactive practice activities. Navigation arrows (◀ ▶) allow moving between words without returning to the grid.

**Activity 1 — 👂 Listen & Repeat:**
- The selected word is displayed in large text with the stressed syllable capitalised and visually emphasised.
- IPA transcription and part-of-speech label are shown below.
- Two action buttons:
  - 🔊 **Play button** — uses the browser's Web Speech API (text-to-speech, British English, rate 0.78) to say the word aloud.
  - 🎤 **Microphone button** — activates a 2.2-second recording session. After recording, a simulated pronunciation score (54–95%) is generated. A colour-coded score bar and feedback card appear:
    - ≥80% → "✅ Great job!" (green) — word is marked **mastered**; the system auto-advances to the next word after 2.4 seconds.
    - 60–79% → "Good try! Focus on the stressed syllable." (amber)
    - <60% → "Try again. Listen again then speak." (red)
  - After the score, an **audio voice feedback** is played (a short musical tone followed by a spoken encouragement phrase, e.g., *"Perfect! You sound like a native speaker!"*).

**Activity 2 — ✂️ Syllable Tap:**
- The word's syllables are shown as separate tappable buttons.
- **Phase 1:** The student taps each syllable **in order** from left to right. Tapping out of order shows "⚠️ Tap in order!"
- **Phase 2 (multi-syllable words only):** After all syllables are tapped, the student must tap the **stressed syllable**. Correct → "🌟 Perfect!" (word mastered, +20 XP, +1 gem). Wrong → the correct stressed syllable is highlighted in green, incorrect in red (+5 XP).
- Single-syllable words are completed after the single tap (+15 XP, +1 gem).

**Activity 3 — 💥 Stress Quiz:**
- The full word is displayed.
- The syllables are shown as individual clickable option buttons.
- The student taps the syllable they believe is stressed.
- Correct → button turns green, "🌟 Correct!" (+15 XP, word mastered).
- Incorrect → selected button turns red, correct syllable turns green, correct answer shown.

---

### 4.3 Sentence Practice Mode (Unlocked after all vocabulary is mastered)

Once all vocabulary words are mastered, the Sentence Practice mode unlocks. A celebration reward pop-up appears (🎉 "Vocabulary Complete! +50 XP") before the mode becomes accessible.

#### Sentence List
All lesson sentences (6 per lesson) are displayed as cards, each showing:
- A numbered circle (dark green with gold number).
- The full sentence with **key stressed words highlighted** in larger green underlined text.
- The IPA phonetic transcription of the full sentence.
- A grammar/skill objective label (e.g., "✊ Rights — 'has the right to'").
- A mastery checkmark (✓) once completed.

#### Sentence Activity Panel
Three activity tabs, identical in concept to the Vocabulary panel:

**Activity 1 — 👂 Listen & Repeat (Sentences):**
- Full sentence displayed with stress markings.
- IPA transcription shown.
- Grammar objective label shown.
- 🔊 button plays the full sentence via TTS.
- 🎤 button records the student saying the sentence; scoring and feedback follow the same system as vocabulary (80% threshold for mastery).

**Activity 2 — 🔗 Chunk Practice:**
- The sentence is pre-divided into meaningful chunks (e.g., *"Every child"* | *"has the right"* | *"to edu-ca-tion."*).
- Each chunk is displayed as a tappable button. Tapping it plays that chunk via TTS, giving the student a model to imitate before attempting the full sentence.
- After listening to chunks, the student taps 🎤 to record the **full sentence**.

**Activity 3 — 💥 Stress Quiz (Sentences):**
- Instruction: "Tap the word that carries the main STRESS in this sentence."
- The key content words of the sentence are presented as option buttons.
- The student selects the most stressed word.
- Correct → button turns green, a pronunciation tip is shown (e.g., *"education has 4 syllables: ed·u·CA·tion — stress is on CA!"*) (+15 XP, sentence mastered).
- Incorrect → correct answer highlighted, answer and tip shown (+5 XP).

---

### 4.4 Repeat & Win Panel

At the bottom of every lesson page, a persistent **"Repeat & Win"** section tracks the student's high-score streak:

- **5 numbered circles** (1–5) represent 5 required successful attempts.
- Each circle fills in (gold → then green) each time the student scores **≥80%** on any word or sentence activity.
- After 5 successful attempts:
  - All 5 circles turn green with a perfect star icon.
  - A **Trophy Reward Pop-up** appears: 🏆 "Trophy! Amazing!" with "+50 XP".
- Two buttons are always visible:
  - **"🎤 Try again (+XP)"** — re-records the current item.
  - **"➡️ Next"** — advances to the next word or sentence.

---

### 4.5 Reward Pop-up System

Throughout the lesson, modal reward pop-ups appear for milestone achievements:

| Trigger | Icon | Title | XP Awarded |
|---|---|---|---|
| Perfect pronunciation (≥90%) | 🌟 | Star! | +30 XP |
| All vocabulary mastered | 🎉 | Vocabulary Complete! | +50 XP |
| All sentences mastered | 🏅 | Lesson Complete! | +50 XP |
| 5 consecutive ≥80% scores | 🏆 | Trophy! | +50 XP |

Pop-ups animate in with a spring bounce effect and are dismissed with a "Keep Going →" button.

---

### 4.6 Gamification Score System Summary

| Reward Element | When Earned | Amount |
|---|---|---|
| XP (Experience Points) | Every recording attempt | 2–30 XP depending on score |
| ⭐ Stars | Scoring ≥75% | +1 star per success |
| 🔥 Fire/Streak | Consecutive ≥80% attempts | Increments by 1 |
| 💎 Gems | Scoring ≥90% (perfect) | +1–2 gems |

All counters are visible at all times in the top navigation bar and reset when the browser session ends (session-based, not persisted to a database).

---

## 5. Game Pages — Vocabulary-Reveal Games

Each lesson in Unit V has a linked **Game Page** accessible via a floating animated "🎮 Game Page" button displayed on the lesson page. Currently, two games are implemented (Lessons 1 and 2). The games are standalone interactive pages.

### 5.1 Game Layout

The game interface is divided into two panels side by side:

**Left Panel — Mystery Scene:**
- A thematic image (e.g., a Children's Day celebration scene for Lesson 1; a Mother's Day scene for Lesson 2) is shown with a **dark overlay grid** of 20 opaque patches (5 columns × 4 rows) completely obscuring it.
- As the student successfully completes vocabulary and sentence cards, the corresponding patches **animate away** (a golden flash followed by transparency), gradually revealing the hidden scene.
- A label at the bottom reads: "🌈 Complete all words & sentences to reveal the scene!"

**Right Panel — Word & Sentence Shelf:**
- A wooden shelf-styled panel (dark brown background) containing all word and sentence cards for the lesson.
- **Word cards** (cream/yellow background): each shows an emoji icon, a label listing the target words, and a "Word" badge.
- **Sentence cards** (same style): each shows an emoji icon, the full target sentence, and a "Sentence" badge.

### 5.2 Gameplay Loop

1. The student clicks a card on the shelf — it becomes selected (highlighted in red with a scale-up effect).
2. A **floating Speak Panel** appears at the bottom of the screen with:
   - The name/text of the selected card.
   - Instructions to click the 🎙️ microphone button and speak.
3. The student clicks 🎙️ — the browser's speech recognition (Web Speech API, English-US) activates. The mic button turns teal and pulses to indicate it is listening.
4. The student speaks the word or sentence. The system transcribes the speech and compares it against the card's target words using a similarity-matching algorithm (word overlap ratio ≥ 80%).
5. **On success:** The card fades and shrinks away (done state). The matched patches on the left panel light up with a golden animation, then become transparent revealing the scene. A floating star (⭐) animation rises from the card. A green feedback message appears (e.g., "✅ Excellent! +3⭐"). The progress bar advances.
6. **On first failure:** A text hint appears under the card showing the exact words to say. Red feedback message appears.
7. **On second failure:** The system uses text-to-speech (TTS) to **speak the word/sentence aloud** for the student, acting as a model. A purple feedback message appears ("Let me say it for you! Listen carefully 🔊").

### 5.3 Star Scoring in the Game

Each card awards stars based on number of failed attempts before success:

| Attempts needed | Stars Awarded |
|---|---|
| First try (0 fails) | ⭐⭐⭐ (3 stars) |
| Second try (1 fail) | ⭐⭐ (2 stars) |
| Third try or more | ⭐ (1 star) |

Total stars accumulate and are shown in the header (e.g., "⭐ 7").

### 5.4 Win Condition

When all 19 cards (13 word cards + 6 sentence cards) are completed, a **Win Overlay** appears:
- Animated confetti emojis (🎉 🎊) spin.
- A golden box displays "🏆 You Won!" with the message "Amazing! You revealed the entire [lesson] scene! All words and sentences completed! 🌟"
- A "🔄 Play Again" button resets all state for replay.

### 5.5 Progress Bar

A header progress bar tracks completion: "X / 19" cards completed with a green fill animation.

---

## 6. About Us Page (`/about`)

A publicly accessible informational page. It presents:
- Information about the platform's purpose and creators.
- An interactive, visually styled layout consistent with the platform's child-friendly aesthetic.
- Accessible from the Landing Page via the "About Us" button.

---

## 7. Authentication & Access Control System

The platform implements a token-based authentication system:

- **Sign-up:** A new user provides a full name, username, password, and role (student or teacher). The account is created and a JWT is returned.
- **Login:** An existing user provides username and password. A JWT is returned on success.
- **Protected Routes:** All pages beyond the Login page require a valid JWT stored in the browser's local storage. If no token is present, the user is automatically redirected to `/login`.
- **Role-based access:** If a page requires the "teacher" role and a student attempts to access it, an "Access Restricted" message is shown with a button to return to the Practice Mode page.
- **Session persistence:** The JWT is stored in local storage, allowing the session to persist across browser refreshes until the token expires or the user logs out.

---

## 8. Lesson Content — Unit V Curriculum Coverage

All five lesson pages implement content directly mapped to the Tunisian 6th-grade EFL textbook (*My English Book 6*, Unit 5 – Celebrations):

| Lesson | Theme | Grammar Focus | Pronunciation Focus |
|---|---|---|---|
| Lesson 1 | Children's Day (pp. 125–127) | "I/He have/has the right to + verb" | Vowel sounds: /aɪ/, /ʌ/, /eɪ/ |
| Lesson 2 | Mother's Day | Adjectives to describe feelings | Word stress in adjectives |
| Lesson 3 | Happy New Year | "going to" future / wishes | Sentence stress and intonation |
| Lesson 4 | Teacher's Day | Expressing gratitude | Vowel reduction in unstressed syllables |
| Lesson 5 | End of School Year Party | Describing events in past tense | Connected speech and linking |

Each lesson covers 28–40 vocabulary items and 6 thematic sentences, all aligned with the textbook's "Let's Speak," "Let's Pronounce," and "Language Support" sections.

---

## 9. Technical Speech & Pronunciation Feedback System

### 9.1 Text-to-Speech (TTS) — Model Pronunciation
- **API used:** Browser-native Web Speech API (`SpeechSynthesis`)
- **Language:** British English (`en-GB`)
- **Speech rate:** 0.78 (slower than normal for learner comprehension)
- **Pitch:** 1.05
- **Purpose:** Provides a pronunciation model for every word, chunk, and sentence. The student listens before attempting to speak.

### 9.2 Speech Recognition — Student Recording
- **API used:** Browser-native Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`)
- **Language:** American English (`en-US`)
- **Mode:** Non-continuous, single-result
- **Duration:** ~2.2 seconds per attempt
- **Error handling:** If the microphone cannot be heard, an error message prompts the student to try again.
- **Browser requirement:** Google Chrome or Microsoft Edge (required for full speech API support).

### 9.3 Scoring Mechanism (Lesson Pages)
A simulated pronunciation score (integer between 54–95) is generated per attempt, weighted toward the 60–90 range to represent a realistic distribution of student performance. The score drives:
- Colour-coded progress bar (green, gold, orange, red).
- Feedback card with title, score percentage, message, and tip.
- XP and gem awards.
- Mastery status (≥80% required).
- Automated voice feedback (tone + spoken encouragement).

### 9.4 Scoring Mechanism (Game Pages)
The game uses a **word-overlap similarity algorithm**:
- The student's transcribed speech is split into individual words.
- Each word is compared against the card's target word list using substring matching.
- A ratio of matched words to total target words is computed.
- A threshold of **0.8 (80%)** determines success or failure.

---

## 10. Summary of Gamification Mechanics

| Mechanic | Description |
|---|---|
| XP Bar | Session-level progress bar filling toward 100 XP per level |
| Stars (⭐) | Earned per successful recording; shown in header |
| Gems (💎) | Earned for perfect (≥90%) attempts |
| Fire Streak (🔥) | Tracks consecutive successes |
| Mastery Dots | Progress dots per lesson showing how many words/sentences are completed |
| Reward Pop-ups | Modal celebrations for completing vocabulary sets, sentence sets, and 5-streak trophies |
| Scene Reveal (Game) | Visual reward: completing cards reveals a hidden thematic image |
| Star Rating (Game) | 1–3 stars per card based on attempts needed |
| Win Screen (Game) | Full-screen celebration when all 19 cards are completed |
| Auto-advancement | System moves to the next word automatically after a successful recording |
| Locked Mode | Sentence Practice locked until all vocabulary is mastered (creates structured progression) |

---

## 11. Platform Visual Design

The platform uses a cohesive child-friendly visual design throughout:

- **Typography:** "Baloo 2" and "Nunito" (Google Fonts) — round, friendly letterforms suitable for young learners.
- **Colour scheme:** Rich, saturated gradients; deep green (#1B4332) as primary brand colour for lesson pages; gold (#F5A623) as accent for rewards and highlights.
- **Background images:** Full-screen thematic background images on all navigation screens (landing, login, practice mode, grade selection, unit selection, lesson selection).
- **Animations:** Hover scale effects on all buttons; spring bounce on reward pop-ups; shimmer/flash on patch reveals; pulse animation on the recording microphone button; floating star animations on success.
- **Glassmorphism:** Semi-transparent blurred card effect used on the login screen.
- **3D button effect:** All navigation buttons use a bottom shadow to simulate physical depth, with a push-down animation on click.

---

*End of Document*
