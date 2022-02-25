import React from 'react';
import Back from './cardBack';

const cardBacks = () => {
  return (
    <div className='app-content'>
      <Back card='char' />
      <Back card='eter' />
      <Back card='tres' />
      <Back card='loot' />
      <Back card='mons' />
      <Back card='soul' />
      <Back card='room' />
    </div>
  );
};

export default cardBacks;
