// MapScreen with clickable monster nodes

import React from 'react';
import { useNavigate } from 'react-router-dom';

const minions = [
  { id: 1, name: 'GREEN', x: '10%', y: '20%', image: '/clients/minions/monster-left.png', questionId: 0 },
  { id: 2, name: 'DBUG', x: '30%', y: '50%', image: '/clients/minions/Dbug2a.png', questionId: 1 },
  { id: 3, name: 'Nullbyte', x: '30%', y: '50%', image: '/clients/minions/nullbyte3a.png', questionId: 1 },
  { id: 4, name: 'Typerrorus', x: '30%', y: '50%', image: '/clients/minions/typerrorus.png', questionId: 1 },
  { id: 5, name: 'Codezilla', x: '30%', y: '50%', image: '/clients/minions/codezilla.png', questionId: 1 },

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

      {minions.map((minion) => (
        <div
          key={minion.id}
          style={{ position: 'absolute', top: minion.y, left: minion.x, cursor: 'pointer' }}
          onClick={() => goToQuestion(minion.questionId)}
        >
          <img src={minion.image} alt={minion.name} style={{ width: '80px', height: '80px' }} />
        </div>
      ))}
    </div>
  );
};

export default MapScreen;
