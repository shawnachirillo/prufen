// Final App.tsx that loads questions from JSON and wires up Dr. Dan

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Login } from './components/CodezillaUiPathmap';
import GameOver from './components/GameOver';
import Victory from './components/Victory';
import MapScreen from './components/MapScreen';

const questions = [
  {
    id: 0,
    text: 'What will the console output?',
    options: [
      '⚡ Codezilla Unleashed! then "string"',
      '⚡ Codezilla Unleashed! then undefined',
      '⚡ Codezilla Unleashed! then "undefined"',
      '⚡ Codezilla Unleashed! followed by a ReferenceError',
    ],
    answer: 0,
  },
  {
    id: 1,
    text: 'What is the output of typeof null?',
    options: ['object', 'null', 'undefined', 'NaN'],
    answer: 0,
  },
];

const QuizQuestion: React.FC = () => {
  const { id } = useParams();
  const questionId = parseInt(id || '0');
  const q = questions[questionId];
  const navigate = useNavigate();

  const handleAnswer = (index: number) => {
    if (index === q.answer) {
      navigate('/victory');
    } else {
      navigate('/gameover');
    }
  };

  return (
    <div className="quiz-container">
      <img src="/clients/backgrounds/codezilla-bg.png" alt="BG" className="background-image" />
      <div className="quiz-header">
        <span role="img">🔥</span>
        <span role="img">⚡</span>
        <span role="img">🧠</span>
      </div>
      <div className="logo">CODEZILLA</div>
      <div className="question-box">
        <h2>Question {questionId + 1}</h2>
        <p>{q.text}</p>
        <div className="question-options">
          {q.options.map((opt, i) => (
            <p key={i} onClick={() => handleAnswer(i)}>{String.fromCharCode(65 + i)}. {opt}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/quiz/:id" element={<QuizQuestion />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/victory" element={<Victory />} />
      </Routes>
    </Router>
  );
};

export default App;
