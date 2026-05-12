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

## 2. Global Design & Aesthetics

The platform is designed to be highly engaging, visually stimulating, and intuitive for primary school students. The design language utilizes modern web aesthetics to create a premium, gamified experience.

*   **Typography:** The platform uses playful yet highly legible fonts. "Baloo 2" is used for prominent headings and interactive elements to provide a rounded, friendly appearance. "Nunito" is used for body text and instructions to ensure readability. "Comic Sans MS" and "Fredoka One" are used sparingly for thematic, gamified titles.
*   **Color Palette:** The application relies on a rich, vibrant color palette. Core brand colors include deep greens (`#1B4332`, `#2D6A4F`) for academic and structural elements, and bright golds (`#F5A623`, `#FFD700`) for rewards, highlights, and primary actions. Soft pastel backgrounds are paired with high-contrast foreground elements.
*   **Visual Effects:**
    *   **Glassmorphism:** Used extensively on authentication cards and floating panels, combining semi-transparent white/dark backgrounds (`rgba(255, 255, 255, 0.8)`) with background blur (`backdrop-filter`) to create a frosted glass effect that allows themed background images to show through.
    *   **3D Button Styling:** All interactive navigation buttons feature thick bottom borders (e.g., `box-shadow: 0 5px 0 #color`) and active state translations (`transform: translateY(2px)`) to mimic the tactile feel of physical arcade buttons.
    *   **Gradients:** Action buttons and lesson headers utilize linear gradients to create depth and vibrancy (e.g., sky blue to deep blue, or bright pink to warm yellow).
*   **Backgrounds:** Each major section of the platform features a distinct, high-quality, full-screen thematic background image (e.g., classroom settings, playful landscapes) configured with `object-fit: cover` to ensure responsiveness across devices.

---

## 3. Screen-by-Screen Detailed Description

### 3.1 Landing Page (`/`)

The entry point of the platform sets the energetic tone of the application.

*   **Background:** A full-screen, vibrant, themed background image (`landing-bg.jpg`).
*   **Title Element ("Prononsiha"):** 
    *   **Design & Colors:** Positioned centrally in the upper third of the screen. The text is rendered in a large (6xl to 8xl), bold "Fredoka One" font. It features a bright gold fill (`#FFD700`) with a thick brown stroke (`#8B4513`) and a heavy drop shadow, giving it an embossed, cartoon-like 3D appearance.
    *   **Functionality:** Acts as the primary visual branding element. It is non-interactive.
*   **"About Us" Button:**
    *   **Design & Colors:** Located in the top-left area. It uses a light blue to bright blue gradient (`#87CEEB` to `#4db8ff`) with white text and a solid blue 3D shadow (`#1a7abf`). The button has pill-shaped rounded corners.
    *   **Functionality:** On hover, the button lifts upwards (`translateY(-3px)`) and the shadow expands, inviting interaction. On click, it navigates the user to the `/about` informational page.
*   **Action Buttons ("Log In" and "Sign Up"):**
    *   **Design & Colors:** Positioned side-by-side at the bottom center. The "Log In" button mirrors the blue gradient design of the "About Us" button. The "Sign Up" button utilizes a vibrant green gradient (`#90EE90` to `#4cd97b`) with a dark green 3D shadow (`#3a9e5f`).
    *   **Functionality:** Both buttons feature the same 3D lift-on-hover and press-down-on-click micro-animations. Clicking either button routes the user to the Authentication page (`/login`), where the respective mode (login or signup) can be selected.

### 3.2 Authentication Page (`/login`)

A secure gateway utilizing a split-panel glassmorphism design.

*   **Background:** A thematic classroom background (`login-bg.png`).
*   **Main Container:** A large, horizontally aligned card centered on the screen. The card itself utilizes a "glass" CSS class, rendering it semi-transparent to blend with the background while maintaining form legibility.
*   **Left Panel (Branding & Toggle):**
    *   **Design & Colors:** Features a dark, translucent background (`bg-white/5`) with a subtle right border. It displays the "SpeakUp!" logo accompanied by a rocket emoji (🚀) in crisp white text. Below the logo, dynamic greeting text ("Welcome Back!" or "Join the Fun!") appears in a heavy, bold white font.
    *   **Functionality:** Contains a toggle switch to alternate between Login and Sign-up modes. The active toggle button is highlighted with a lighter translucent background. Clicking a toggle dynamically changes the form fields in the right panel without reloading the page.
*   **Right Panel (Form Elements):**
    *   **Design & Colors:** The form inputs (Username, Password, and Full Name for sign-up) are styled as "glass inputs"—translucent fields with white text, placeholder text in a soft white/gray, and subtle white borders. The labels above the inputs are styled in small, uppercase, widely spaced letters for a clean, modern look.
    *   **Functionality:** 
        *   **Inputs:** Accept user text.
        *   **Submit Button:** A large primary button spanning the width of the form. It changes text based on mode ("Start Learning" or "Create My Account"). On click, it triggers an asynchronous API call to the backend (`/api/auth/login` or `/api/auth/signup`).
        *   **Error Handling:** If authentication fails, a red error box with a translucent red background (`bg-red-500/10`) appears below the inputs, displaying the error message returned from the server.
        *   **Success Routing:** Upon successful authentication, a JWT token is saved locally, and the user is instantly routed to the Practice Mode page.

### 3.3 Practice Mode Page (`/practice-mode`) *(Protected)*

This page directs the user's learning path.

*   **Background:** A colorful, engaging background image (`Background Page 3.png`).
*   **"Practice Alone" Button:**
    *   **Design & Colors:** Positioned on the left side of the screen. It is a wide, pill-shaped button featuring a vibrant sky-blue to deep-blue vertical gradient. It includes a white microphone icon and bold white text. The button boasts a prominent dark blue 3D drop shadow (`#1e3a8a`). A subtle, blurred white highlight at the top edge simulates a glossy reflection.
    *   **Functionality:** Features the standard 3D press animation. Clicking it routes the user to the Grade Selection page (`/grades`).
*   **"Practice With Friends" Button:**
    *   **Design & Colors:** Positioned on the right side. It mirrors the design of the "Practice Alone" button but utilizes a warm amber to yellow-brown gradient with a dark brown 3D shadow (`#78350f`) and features a "Users" icon.
    *   **Functionality:** Currently acts as a placeholder for future multiplayer features. Clicking it triggers a browser alert: "Practice With Friends — coming soon! 🎉".

### 3.4 Grade Selection Page (`/grades`) *(Protected)*

*   **Background:** A specific thematic image (`Background Page 4.jpeg`).
*   **Navigation:** A top-left circular back button (brown background `#3E2310`, white arrow) and a bottom-center "Back to Main Menu" pill button. Both use white 3D borders.
*   **Grade Buttons Container:** Centered horizontally and vertically.
    *   **Design & Colors:** Three identical pill-shaped buttons ("4th Grade", "5th Grade", "6th Grade"). They utilize a soft yellow to light gold gradient (`#fff8e1` to `#ffe082`), a thick golden-yellow border (`#e6a817`), and dark brown text (`#7B3F00`). The 3D shadow is a dark gold (`#c4890e`).
    *   **Functionality:** The "4th Grade" and "5th Grade" buttons are inactive placeholders that trigger an alert when clicked. The "6th Grade" button is fully active; clicking it routes the user to the Unit Selection page (`/units/6`).

### 3.5 Unit Selection Page (`/units/:grade`) *(Protected)*

*   **Background:** A thematic image (`Background Page 5.png`).
*   **Navigation:** A top-left circular back button (orange background `#F57C00`, white arrow).
*   **Unit Cards (Grid Layout):** A 3x2 grid centrally aligned.
    *   **Design & Colors:** Each of the six unit cards is a large, square button with heavily rounded corners (32px radius). Each card has a distinct color scheme (gradient background, matching thick border, and solid 3D shadow):
        *   Unit I: Purple gradient
        *   Unit II: Green gradient
        *   Unit III: Blue gradient
        *   Unit IV: Red/Pink gradient
        *   **Unit V: Gold/Yellow gradient (`#ffe066` to `#f5b800`)**
        *   Unit VI: Orange gradient
    *   **Elements within the Card:** A top label ("UNIT [Roman Numeral]"), a massive central emoji (e.g., 🎉 for Unit V), and a bottom label with the unit's theme (e.g., "Celebrations").
    *   **Functionality:** All cards feature hover animations (scale up, translate up). Only the **Unit V** card is active, routing the user to the Lesson Selection page (`/lessons/6/5`). The others trigger "coming soon" alerts.

### 3.6 Lesson Selection Page (`/lessons/:grade/:unitNumber`) *(Protected)*

*   **Background:** A thematic image (`Background page 6.png`).
*   **Navigation:** A top-left circular back button (red background `#D32F2F`, white arrow).
*   **Lesson List:** A vertically stacked list of wide, pill-shaped buttons centrally aligned.
    *   **Design & Colors:** Each lesson button features a unique, vibrant linear gradient background (e.g., Pink to Yellow for Lesson 1, Green for Lesson 2). The text is bold white with a subtle text shadow to ensure readability against the bright backgrounds.
    *   **Icons:** Each button is flanked by two icons resting on frosted-glass circular backgrounds (microphone on the left, audio waves on the right).
    *   **Functionality:** Clicking a lesson button routes the user to the specific lesson page component (e.g., clicking Lesson 1 routes to `/unit5/lesson1`).

### 3.7 Core Lesson Pages (Unit V, Lessons 1–5)

The lesson pages are highly interactive, embedded HTML environments designed for rigorous pronunciation practice.

#### Top Navigation Bar (Sticky)
*   **Design:** A dark green (`#1B4332`) bar fixed to the top of the viewport.
*   **Elements:** 
    *   Left: The "SpeakUp!" logo and lesson subtitle.
    *   Right: Gamification counters. Three pill-shaped badges with translucent white backgrounds (`rgba(255,255,255,0.14)`) displaying live counts for Stars (⭐), Fire/Streak (🔥), and Gems (💎).
*   **Functionality:** Remains visible during scrolling. The counters update dynamically via JavaScript as the user completes activities.
*   **XP Progress Bar:** Immediately below the nav bar, a dark green track houses a gold gradient (`#FFD700`) progress bar that smoothly animates its width to reflect current XP points.

#### Lesson Header Card
*   **Design:** A white, rounded card with a light green border (`rgba(27,67,50,0.13)`).
*   **Elements:** A thematic icon block on the left (gradient background), the lesson title, and a green-tinted objective box (`#D8F3DC`) detailing the learning goals. Below the objective, a row of progress dots visually indicates how many lesson sections are complete.

#### Mode Switcher
*   **Design:** A pill-shaped container splitting two options: "🔤 Vocabulary Practice" and "💬 Sentence Practice".
*   **Colors:** The inactive tab is light gray; the active tab highlights in dark green (`#1B4332`) with gold text (`#F5A623`).
*   **Functionality:** Toggles the display of the vocabulary grid versus the sentence list. The Sentence tab is locked (visually indicated with a 🔒 and reduced opacity) until all vocabulary words are marked as mastered.

#### Vocabulary Practice Mode
*   **Category Filter Tabs:** Small, pill-shaped buttons that filter the word grid below (e.g., Verbs, Nouns). Active tabs turn dark green.
*   **Word Grid:** A responsive grid of white cards (`.wcard`). 
    *   **Design:** Each card displays the word broken into syllables. The **stressed syllable** is visually distinct: larger font size, dark green text, and underlined with a thick gold line. It also displays the phonetic IPA and a color-coded part-of-speech badge (e.g., green for verbs).
    *   **Functionality:** Clicking a card highlights it with a thick green border and loads that specific word into the Activity Panel below. A checkmark (✓) appears on the card when mastered.

#### Sentence Practice Mode
*   **Sentence List:** A vertical list of white cards.
    *   **Design:** Sentences are displayed with the **stressed words** styled identically to stressed syllables (dark green, gold underline). Includes IPA and a grammar objective badge.
    *   **Functionality:** Clicking a sentence loads it into the Activity Panel.

#### Interactive Activity Panel
This panel sits below the grids/lists and houses the actual practice mechanics. It features three tabs:
1.  **Listen & Repeat:**
    *   **Elements:** Displays the target text largely in the center. Two large circular buttons sit below: a blue speaker icon (🔊) and a red/teal microphone icon (🎤).
    *   **Functionality:** 
        *   Clicking 🔊 triggers the browser's Text-to-Speech (TTS) engine to read the text in British English at a slightly reduced speed.
        *   Clicking 🎤 activates the microphone. The button turns red with a pulsating animation (`box-shadow` animation). After a set duration (~2.2s), a simulated scoring algorithm returns a percentage.
        *   A progress bar animation visually fills to match the score. A feedback card appears below it with a color-coded message (Green for ≥80% success, Amber for >60%, Red for <60%).
2.  **Syllable Tap / Chunk Practice:**
    *   **Elements:** The word/sentence is broken down into individual interactive pill buttons.
    *   **Functionality:** The user must tap the components in specific sequences. For words, they tap syllables in order, then tap the stressed syllable. Correct taps turn buttons green; incorrect taps turn them red.
3.  **Stress Quiz:**
    *   **Elements:** A multiple-choice format presenting parts of the word/sentence as buttons.
    *   **Functionality:** The user selects the part they believe carries the primary stress. Immediate color-coded feedback (green/red) is provided.

#### Repeat & Win Panel
*   **Design:** Located at the bottom of the page. Features 5 circular slots.
*   **Functionality:** Tracks consecutive successful (≥80%) speaking attempts. As the user succeeds, the circles fill with gold, then green. Filling all 5 triggers a Trophy reward popup.

#### Reward Popups
*   **Design:** Modal dialogs that appear in the center of the screen over a dark overlay (`rgba(0,0,0,0.45)`). The modals are white with thick gold borders (`#F5A623`), featuring a massive emoji, bold title, and XP reward amount displayed in a gold pill badge.
*   **Functionality:** They animate in with a pop/bounce effect (`cubic-bezier`). They block interaction with the page until the user clicks the "Keep Going →" button.

### 3.8 Game Pages (Vocabulary-Reveal Games)

The game pages provide a purely gamified review of the lesson's vocabulary and sentences.

*   **Global Layout:** A dark, moody background gradient (`#0f2027` to `#2c5364`) to contrast with the bright game elements. A colorful header bar spans the top displaying the title and a progress bar (e.g., "0 / 19").
*   **Left Panel (Mystery Scene):**
    *   **Design:** A large rectangular container with a glowing yellow border and shadow (`box-shadow: 0 0 30px rgba(255,230,109,0.6)`). Inside, a thematic image (e.g., a Children's Day party) is rendered very dark (`filter: brightness(0.25)`). Overlaid on top is a CSS Grid of 20 opaque dark blue patches (`rgba(5,10,30,0.88)`).
    *   **Functionality:** As the user successfully pronounces words, specific patches trigger a keyframe animation (`patchReveal`): they flash bright yellow, scale up slightly, and then become fully transparent, slowly revealing the bright image underneath.
*   **Right Panel (Shelf):**
    *   **Design:** Styled to look like a physical shelf with a wood-like brown gradient background and thick brown borders. It contains rows of "Cards".
    *   **Card Design (`.vcard`):** Small, physical-looking cards with a cream-to-yellow gradient background, a thick gold border, and a drop shadow. They contain an emoji icon and text. A tiny badge in the corner indicates if it's a "Word" (teal) or "Sentence" (red).
    *   **Functionality:** Cards have a playful hover state (tilting and lifting). Clicking a card selects it (border turns red, card scales up) and opens the Speak Panel. Once a card is successfully completed, it animates out (scales down to 0 opacity) and is removed from play.
*   **Speak Panel:**
    *   **Design:** A floating, semi-transparent dark panel (`backdrop-filter: blur`) fixed to the bottom center. It contains instructions and a prominent circular microphone button.
    *   **Functionality:** 
        *   Clicking the mic initiates real browser Speech Recognition (`webkitSpeechRecognition`). The mic button pulses.
        *   The transcribed speech is compared against the card's target words.
        *   Success: Floating stars animate upwards, the card disappears, patches reveal, and progress updates.
        *   Failure: On the first fail, red text hints appear on the card. On the second fail, the browser's TTS engine speaks the correct pronunciation aloud as a model for the student.
*   **Win Overlay:**
    *   **Design:** When all cards are cleared, a full-screen dark overlay appears. A bright gold, glowing box (`#ffd700`) drops in with a bounce animation, displaying "🏆 You Won!" alongside spinning confetti emojis. A prominent red "Play Again" button resets the game state.

---

## 4. Technical Speech & Pronunciation Feedback System

### 4.1 Text-to-Speech (TTS) — Model Pronunciation
*   **API used:** Browser-native Web Speech API (`SpeechSynthesis`)
*   **Language:** British English (`en-GB`)
*   **Speech rate:** 0.78 (slower than normal to aid learner comprehension)
*   **Pitch:** 1.05
*   **Purpose:** Provides an audio model for every word, chunk, and sentence. The student can listen to perfect pronunciation before attempting to speak.

### 4.2 Speech Recognition — Student Recording (Game Pages)
*   **API used:** Browser-native Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`)
*   **Language:** American English (`en-US`)
*   **Mode:** Non-continuous, single-result
*   **Evaluation Algorithm:** Uses a word-overlap similarity algorithm. The transcribed speech is split into words and matched against an array of target acceptable words. A match ratio of ≥ 80% is required to pass the card.
*   **Error handling:** If the microphone cannot be heard, an error message prompts the student to try again.

---

*End of Document*
