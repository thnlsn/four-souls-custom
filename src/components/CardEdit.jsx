// So this form will use the card type and will require the neccesary fields for it...
import React, { useContext } from 'react';
import { CardContext } from '../state/context';

import TextInput from './Inputs/TextInput';
import { getDimensions } from '../scripts/helpers';
import blank from '../assets/images/blank.png';

const CardEdit = () => {
  const { cardType, name, changeName, image, changeImage } =
    useContext(CardContext);

  return (
    <div className='app-content card-editor-content'>
      <div
        className='card-display'
        style={{
          width: getDimensions(cardType, 2).width,
          height: getDimensions(cardType, 2).height,
          background: `url(${image}), url(${blank})`,
          //backgroundSize: 'contain',
          //objectFit: 'contain',
          //backgroundSize: 'contain',
        }}
      ></div>
      <div className='card-form'>
        <TextInput label='name' state={name} changeState={changeName} />
        <TextInput label='image' state={image} changeState={changeImage} />
      </div>
    </div>
  );
};

export default CardEdit;
