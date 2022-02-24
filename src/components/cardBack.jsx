import React from 'react';
import backs from '../assets/cards/backs';

const cardBack = ({ card }) => {
  const handleCardClick = () => {
    console.log(`Clicked ${card} card back`);
  };

  const cardType = () => {
    switch (card) {
      case 'char':
        return 'Character';
      case 'eter':
        return 'Starting Items';
      case 'tres':
        return 'Treasure';
      case 'loot':
        return 'Loot';
      case 'mons':
        return 'Monsters';
      case 'soul':
        return 'Bonus Souls';
      case 'room':
        return 'Rooms';
    }
  };

  return (
    <div className='card-select'>
      <div
        className={`card-select__image card-select__image--${card}`}
        style={{
          width: card !== 'room' ? '184px' : '251px',
          height: card !== 'room' ? '251px' : '184px',
        }}
        onClick={() => handleCardClick()}
      />
      <div className='card-select__text' onClick={() => handleCardClick()}>
        {cardType()}
      </div>
    </div>
  );
};

export default cardBack;
