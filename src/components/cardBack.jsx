import React from 'react';
import backs from '../assets/cards/backs';
import { cardDimensions } from '../utils/helpers';

const CardBack = ({ card }) => {

  const handleCardClick = () => {
    console.log(`Clicked ${card} card back`);
  };

  return (
    <div
      className={`card-select card-select--${card}`}
      style={{ ...cardDimensions(card), border: '1px solid black' }}
      onClick={() => handleCardClick()}
    />
  );
};

export default CardBack;
