// Final login component with styles
import React from 'react';
import '../styles/codezilla.css';

export const Login: React.FC = () => {
  return (
    <div className="quiz-container">
      <img src="/clients/backgrounds/codezilla-bg.png" alt="Background" className="background-image" />
      <div className="question-box">
        <h1>Login</h1>
        <input type="text" placeholder="username" className="login-input" />
        <input type="password" placeholder="password" className="login-input" />
        <p>not a player yet?</p>
        <button className="signup-button">Sign Up!</button>
      </div>
      <div className="logo">CODEZILLA</div>
    </div>
  );
};
