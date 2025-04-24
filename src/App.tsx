import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/login';
import GameMap from './components/GameMap';
import GameOver from './components/GameOver';
import Victory from './components/Victory';
import Signup from './components/signup';

import './styles/codezilla.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<GameMap />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/victory" element={<Victory />} />


      </Routes>
    </Router>
  );
};

export default App;
