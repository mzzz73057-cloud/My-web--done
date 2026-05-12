import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AboutUsPage from './pages/AboutUsPage';
import PracticeModePage from './pages/PracticeModePage';
import GradeSelectionPage from './pages/GradeSelectionPage';
import UnitSelectionPage from './pages/UnitSelectionPage';
import LessonSelectionPage from './pages/LessonSelectionPage';
import Unit5Lesson1 from './pages/Unit5Lesson1';
import Unit5Lesson2 from './pages/Unit5Lesson2';
import Unit5Lesson3 from './pages/Unit5Lesson3';
import Unit5Lesson4 from './pages/Unit5Lesson4';
import Unit5Lesson5 from './pages/Unit5Lesson5';
import Unit5Lesson1Game from './pages/Unit5Lesson1Game';
import Unit5Lesson2Game from './pages/Unit5Lesson2Game';
import Unit5Lesson3Game from './pages/Unit5Lesson3Game';
import Unit5Lesson4Game from './pages/Unit5Lesson4Game';
import Unit5Lesson5Game from './pages/Unit5Lesson5Game';
import NotFoundPage from './pages/NotFoundPage';

function ProtectedRoute({ children, requiredRole }) {
  const { token, user, loading } = useAuth();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // While we're validating the token and fetching user info, avoid redirect loops.
  if (loading && !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center text-lg font-semibold">Loading…</div>
      </div>
    );
  }

  if (requiredRole && user?.role !== requiredRole) {
    return (
      <div className="flex h-screen items-center justify-center px-4">
        <div className="max-w-md rounded-2xl border border-brand-100 bg-white/80 p-8 text-center shadow-sm">
          <div className="text-3xl font-semibold text-brand-800 mb-3">Access restricted</div>
          <div className="text-sm text-brand-600 mb-6">
            This page is reserved for teachers. Please log in with a teacher account to access it.
          </div>
          <button
            type="button"
            className="button-primary"
            onClick={() => (window.location.href = '/practice-mode')}
          >
            Back to practice
          </button>
        </div>
      </div>
    );
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/practice-mode"
          element={
            <ProtectedRoute>
              <PracticeModePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/grades"
          element={
            <ProtectedRoute>
              <GradeSelectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/units/:grade"
          element={
            <ProtectedRoute>
              <UnitSelectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lessons/:grade/:unitNumber"
          element={
            <ProtectedRoute>
              <LessonSelectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson1"
          element={
            <ProtectedRoute>
              <Unit5Lesson1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson2"
          element={
            <ProtectedRoute>
              <Unit5Lesson2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson1/game"
          element={
            <ProtectedRoute>
              <Unit5Lesson1Game />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson2/game"
          element={
            <ProtectedRoute>
              <Unit5Lesson2Game />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson3/game"
          element={
            <ProtectedRoute>
              <Unit5Lesson3Game />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson4/game"
          element={
            <ProtectedRoute>
              <Unit5Lesson4Game />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson5/game"
          element={
            <ProtectedRoute>
              <Unit5Lesson5Game />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson3"
          element={
            <ProtectedRoute>
              <Unit5Lesson3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson4"
          element={
            <ProtectedRoute>
              <Unit5Lesson4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/unit5/lesson5"
          element={
            <ProtectedRoute>
              <Unit5Lesson5 />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}
