// Final login component with styles
import React from 'react';
import '../styles/codezilla.css';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('map');

  };

  return (
    <div className="quiz-container">
      <img src="/clients/backgrounds/codezilla-bg.png" alt="Background" className="background-image" />
      <div className="question-box">
        <h1>Login</h1>
        <input type="text" placeholder="username" className="login-input" />
        <input type="password" placeholder="password" className="login-input" />
        <p>not a player yet?</p>
        <button className="signup-button" onClick={handleLogin}>Sign Up!</button>
      </div>
      <div className="logo">CODEZILLA</div>
    </div>
  );
};
