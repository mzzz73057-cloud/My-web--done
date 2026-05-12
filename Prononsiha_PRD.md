# Prononsiha: Gamified English Fluency Platform

## 1. Product Requirements Document (PRD)

### Project Overview
Prononsiha is a comprehensive, gamified web platform designed to help non-native English speakers—particularly young learners—improve their English pronunciation and fluency. The platform blends structured educational modules (units and lessons) with interactive mechanics like voice recognition, vocabulary sorting, and reward systems (stars, diamonds, fires) to maximize engagement and learning retention.

### Target Users
- **Primary Users (Students):** Young learners who need an engaging, interactive environment to practice English speaking and pronunciation without the pressure of a traditional classroom setting.
- **Secondary Users (Teachers/Administrators):** Educators who monitor progress, assign specific modules, and rely on the platform as a supplemental teaching tool.

### User Personas
- **Leo the Learner (Age 8):** Gets bored easily with traditional textbooks. Loves playing web games. Needs immediate, encouraging feedback to build confidence in speaking English.
- **Ms. Sarah (Teacher):** Needs a reliable platform to send her students to for pronunciation homework. She values a clear curriculum structure (Units -> Lessons) and accessible progress indicators.

### Core Features
- **Structured Curriculum:** Courses are divided into Grades, Units, and Lessons.
- **Interactive Voice Assessment:** Uses speech-to-text with a configured confidence threshold (e.g., 70%) to evaluate student pronunciation accuracy.
- **Gamified "Game Space":** Each lesson features a dedicated interactive game (e.g., "Total Darkness" spotlight reveal mechanic, phonics sorting) to test knowledge.
- **Reward System:** Visual feedback mechanisms including stars for completion, fires for streaks, and diamonds for perfect scores.
- **Practice Mode:** A low-pressure area for students to practice vocabulary freely outside of graded lessons.
- **Role-based Access:** Differentiated experiences and access limits for students vs. teachers.

### User Stories
- *As a student*, I want to click a floating "Game" button in my lesson so I can immediately apply the vocabulary I just learned in a fun way.
- *As a student*, I want the system to understand my voice even if my pronunciation isn't 100% perfect, so I don't get frustrated.
- *As a teacher*, I want a secure login system so that student data and progress remain private.

### Functional Requirements
- The system must capture microphone input and process it using the Web Speech API.
- The system must route users through a hierarchical path: Grade -> Unit -> Lesson -> Game.
- The platform must support role-based route protection (e.g., specific pages restricted to teachers).
- Games must be embedded seamlessly using iframes communicating with the parent React application.

### Non-Functional Requirements
- **Accessibility:** High-contrast UI elements, clear fonts (e.g., Fredoka One), and large, touch-friendly buttons.
- **Performance:** Fast loading times for audio assets and game files; animations should run at 60fps.
- **Cross-Browser Compatibility:** The Web Speech API implementation must fallback gracefully on unsupported browsers.

---

## 2. System Architecture

### Client-Server Model
Prononsiha operates on a modern single-page application (SPA) architecture. The React frontend handles all UI rendering, routing, and browser APIs (microphone), while the Node.js backend serves as a RESTful API for authentication, user data retrieval, and progress tracking.

### Frontend Architecture
- Built as a React SPA using Vite/Create React App.
- Uses `react-router-dom` for client-side routing.
- Employs a component-based structure (e.g., `GameButton`, `ProtectedRoute`).
- Static game files (HTML/CSS/JS) are served from the `public/games` folder and rendered via `<iframe>` tags to isolate legacy or complex game logic from the React lifecycle.

### Backend Architecture
- Node.js environment utilizing the Express.js framework.
- Stateless architecture utilizing JWT (JSON Web Tokens) for secure communication.
- Modular route handlers for `/auth`, `/users`, and `/progress`.

### Database Structure
- NoSQL database (MongoDB) allowing flexible schema design for varying lesson structures.

### API Design (Example Endpoints)
- `POST /api/auth/login`: Accepts credentials, returns JWT and user role.
- `GET /api/progress/:userId`: Retrieves the current stars and diamonds for a user.
- `POST /api/progress/update`: Submits new scores from a completed game module.

---

## 3. Frontend

### Technologies
- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** React.js
- **Styling:** Custom CSS with variables (glassmorphism effects, CSS modules).

### Pages and Components
- **Pages:** `LandingPage`, `LoginPage`, `AboutUsPage`, `UnitSelectionPage`, `LessonSelectionPage`, `Unit5Lesson4`, `Unit5Lesson4Game`, etc.
- **Components:** `GameButton` (floating animated button), `ProtectedRoute` (HOC for role-validation).

### UI/UX Structure
- **Aesthetic:** "Classroom" theme, bright engaging colors (brand-blue, brand-orange), glassmorphism cards.
- **Navigation:** Back arrows on all sub-pages ensuring users never get stuck in a dead-end route.

### Example Code Snippets
```jsx
// GameButton.jsx
export default function GameButton({ to }) {
  const navigate = useNavigate();
  return (
    <button className="floating-game-btn" onClick={() => navigate(to)}>
      <span className="game-btn-emoji">🎮</span>
      <span className="game-btn-label">Game</span>
    </button>
  );
}
```

---

## 4. Backend

### Technology Choice
- **Node.js** with **Express.js**: Chosen for its fast event-driven architecture, making it suitable for high-concurrency API calls from multiple students.

### Authentication System
- Token-based authentication (JWT). Tokens are stored in HTTP-only cookies or local storage, and attached to the `Authorization` header for protected routes.
- Passwords hashed using `bcrypt` before storage.

### Business Logic
- Validation of role-based access (preventing students from accessing teacher dashboards).
- Aggregation of scores (calculating total stars across all units to determine overall grade).

### API Implementation
```javascript
// Express route example
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, role: user.role }, SECRET);
    res.json({ token, user });
  } else {
    res.status(401).send('Invalid credentials');
  }
});
```

---

## 5. Database

### Type of Database
- **MongoDB** (NoSQL). Document-oriented structure perfectly matches the nested JSON structure of Units and Lessons.

### Collections
1. **Users:** Stores credentials, roles, and profile info.
2. **Progress:** Maps `userId` to an array of completed lessons, scores, and timestamps.
3. **Content (Optional):** Dynamic storage for lesson text/vocabulary if not hardcoded in the frontend.

### Relationships
- A `User` document has a one-to-one relationship with a `Progress` document.

---

## 6. Server & Deployment

### How the server works
The backend server runs constantly, listening for HTTP requests on a specific port (e.g., 5000). It acts as the gatekeeper between the frontend app and the database.

### Hosting Options
- **Frontend:** Vercel, Netlify, or GitHub Pages.
- **Backend:** Render, Heroku, or AWS EC2.
- **Database:** MongoDB Atlas (Cloud-hosted).

### Deployment Steps
1. Push code to GitHub.
2. Connect Vercel to the frontend repository; configure build commands (`npm run build`).
3. Connect Render to the backend repository; set environment variables (Database URI, JWT Secret).
4. Whitelist the backend domain in the frontend API calls.

### Environment Setup
- `.env` files used to securely store `VITE_API_URL` (frontend) and `MONGO_URI` (backend).

---

## 7. Step-by-Step Development Roadmap

### Phase 1: Foundation (What to build first)
- Set up the React application and Express server.
- Create basic static UI components (Landing Page, Login UI).
- Define the MongoDB schema and connect the database.

### Phase 2: Core Mechanics
- Implement User Authentication (Login/Logout/Roles).
- Build the hierarchical navigation UI (Grade -> Unit -> Lesson).
- Integrate the Web Speech API for pronunciation detection.

### Phase 3: Gamification & Content
- Create the standalone HTML5 game modules.
- Embed games into React pages using iframes.
- Implement scoring logic (Stars, Diamonds) and save it to the database.

### Phase 4: Polish (Milestone)
- Refine UI/UX with glassmorphism and animations.
- Ensure microphone threshold configurations are optimized.
- Cross-browser testing and responsive design fixes.

---

## 8. Best Practices

### Security
- Never store plain-text passwords (use bcrypt).
- Validate all incoming user data on the backend to prevent NoSQL injection.
- Use HTTPS to encrypt audio data sent during speech recognition.

### Performance
- Lazy-load React components (like individual Unit pages) to reduce initial bundle size.
- Compress heavy static assets (e.g., classroom background images, game audio files).

### Scalability
- Design the database to easily accommodate new Units (Unit 6, Unit 7) without requiring schema migrations.
- Keep the backend stateless so it can be horizontally scaled across multiple servers if the student user base grows rapidly.
