// GameOver screen with return to map link

import React from 'react';
import { Link } from 'react-router-dom';

const GameOver: React.FC = () => {
  return (
    <div className="quiz-container">
      <img src="/clients/backgrounds/codezilla-bg.png" alt="BG" className="background-image" />
      <div className="question-box">
        <h2>Game Over</h2>
        <p>You were defeated by Codezilla. Try again!</p>
        <Link to="/map" className="signup-button">Return to Map</Link>
      </div>
    </div>
  );
};

export default GameOver;
