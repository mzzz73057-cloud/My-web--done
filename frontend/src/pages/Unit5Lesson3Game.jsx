import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unit5Lesson3Game = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', position: 'relative' }}>
      <iframe
        src="/games/game3.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Unit 5 Lesson 3 Game"
      />
      <button 
        onClick={() => navigate('/unit5/lesson3')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          color: '#FF6B35',
          fontFamily: "'Fredoka One', cursive, sans-serif"
        }}
      >
        ← Back to Lesson
      </button>
    </div>
  );
};

export default Unit5Lesson3Game;
