import React, { useContext } from 'react';
import { CardContext } from '../state/context';

const CardBack = ({ card }) => {
  const { cardType, changeCardType } = useContext(CardContext);

  const handleCardClick = () => {
    console.log(cardType);
    console.log(`Clicked ${card} card back`);
    changeCardType(card);
  };

  const cardTypeFull = () => {
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
        className='card-select__text font-title'
        onClick={() => handleCardClick()}
      >
        {cardTypeFull()}
      </div>
      <div
        className={`card-select__image card-select__image--${card}`}
        style={{
          width: card !== 'room' ? '184px' : '251px',
          height: card !== 'room' ? '251px' : '184px',
        }}
        onClick={() => handleCardClick()}
      />
    </div>
  );
};

export default CardBack;
