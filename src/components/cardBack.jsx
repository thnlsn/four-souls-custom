import React, { useContext } from 'react';
import { CardContext } from '../state/context';

import { getDimensions } from '../scripts/helpers';

const CardBack = ({ card }) => {
  const { cardType, changeCardType } = useContext(CardContext);

  const handleCardClick = () => {
    console.log(`Changed ${cardType} to ${card}`);
    changeCardType(card);
  };

  const cardTypeFull = (card) => {
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
        {cardTypeFull(card)}
      </div>
      <div
        className={`card-select__image card-select__image--${card}`}
        style={{
          width: getDimensions(cardType).width,
          height: getDimensions(cardType).height,
        }}
        onClick={() => handleCardClick()}
      />
    </div>
  );
};

export default CardBack;
