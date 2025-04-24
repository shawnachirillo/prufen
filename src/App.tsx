import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/CodezillaUiPathmap';
import MapScreen from './components/MapScreen';
import GameOver from './components/GameOver';
import Victory from './components/Victory';
import './styles/codezilla.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/victory" element={<Victory />} />
      </Routes>
    </Router>
  );
};

export default App;
