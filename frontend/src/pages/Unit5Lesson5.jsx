import React from 'react';
import GameButton from '../components/GameButton';

const Unit5Lesson5 = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', position: 'relative' }}>
      <iframe
        src="/lessons/lesson5.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Unit 5 Lesson 5"
      />
      <GameButton to="/unit5/lesson5/game" />
    </div>
  );
};

export default Unit5Lesson5;
