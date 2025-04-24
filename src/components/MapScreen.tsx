// MapScreen with clickable monster nodes

import React from 'react';
import { useNavigate } from 'react-router-dom';

const monsters = [
  { id: 1, name: 'Green Dino', x: '10%', y: '20%', image: '/clients/monsters/monster-left.png', questionId: 0 },
  { id: 2, name: 'Mosquito', x: '30%', y: '50%', image: '/clients/monsters/mosquito.png', questionId: 1 },
];

const MapScreen: React.FC = () => {
  const navigate = useNavigate();

  const goToQuestion = (id: number) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="quiz-container">
      <img src="/clients/backgrounds/codezilla-bg.png" alt="BG" className="background-image" />
      <div className="logo">CODEZILLA</div>

      {monsters.map((monster) => (
        <div
          key={monster.id}
          style={{ position: 'absolute', top: monster.y, left: monster.x, cursor: 'pointer' }}
          onClick={() => goToQuestion(monster.questionId)}
        >
          <img src={monster.image} alt={monster.name} style={{ width: '80px', height: '80px' }} />
        </div>
      ))}
    </div>
  );
};

export default MapScreen;
