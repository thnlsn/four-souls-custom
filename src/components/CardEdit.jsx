// So this form will use the card type and will require the neccesary fields for it...
import React, { useContext } from 'react';
import { CardContext } from '../state/context';

import TextInput from './Inputs/TextInput';
import { getDimensions } from '../scripts/helpers';

const CardEdit = () => {
  const { cardType, name, changeName } = useContext(CardContext);

  return (
    <div className='app-content card-editor-content'>
      <div
        className='card-display'
        style={{
          width: getDimensions(cardType, 2).width,
          height: getDimensions(cardType, 2).height,
        }}
      ></div>
      <div className='card-form'>
        <TextInput label='name' state={name} changeState={changeName} />
      </div>
    </div>
  );
};

export default CardEdit;
