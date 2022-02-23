import React from 'react';
import backs from '../assets/cards/backs';

const cardBack = ({ card }) => {
  const handleCardClick = () => {
    console.log(`Clicked ${card} card back`);
  };

  return (
    <div
      className='card-select'
      style={{ backgroundImage: `url(${backs[card]})` }}
      onClick={() => handleCardClick()}
    />
  );
};

export default cardBack;
