import React from 'react';
import backs from '../assets/cards/backs';

const cardBack = ({ card }) => {
  const handleCardClick = () => {
    console.log(`Clicked ${card} card back`);
  };

  return (
    <div
      className={`card-select card-select--${card}`}
      style={{
        width: card !== 'room' ? '184px' : '251px',
        height: card !== 'room' ? '251px' : '184px',
      }}
      onClick={() => handleCardClick()}
    />
  );
};

export default cardBack;
