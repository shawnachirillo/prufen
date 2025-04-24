// Victory screen with return to map link

import React from 'react';
import { Link } from 'react-router-dom';

const Victory: React.FC = () => {
  return (
    <div className="quiz-container">
      <img src="/clients/backgrounds/codezilla-bg.png" alt="BG" className="background-image" />
      <div className="question-box">
        <h2>Victory!</h2>
        <p>You defeated Codezilla! You are now a coding hero.</p>
        <Link to="/map" className="signup-button">Return to Map</Link>
      </div>
    </div>
  );
};

export default Victory;
