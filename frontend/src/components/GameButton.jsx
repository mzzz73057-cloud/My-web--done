import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameButton.css';

export default function GameButton({ to }) {
  const navigate = useNavigate();

  return (
    <button 
      className="floating-game-btn" 
      onClick={() => navigate(to || '/practice-mode')}
      aria-label="Go to Game Space"
    >
      <div className="game-btn-inner">
        <span className="game-btn-emoji">🎮</span>
        <span className="game-btn-label">Game</span>
      </div>
    </button>
  );
}
