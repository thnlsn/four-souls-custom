// So this form will use the card type and will require the neccesary fields for it...
import React, { useContext } from 'react';
import { CardContext } from '../state/context';

const CardEdit = () => {
  const { cardType, name, changeName } = useContext(CardContext);

  return (
    <div className='app-content card-editor-content'>
      <div className='card-display'>Card Display</div>
      <div className='card-form'>
        <input className='card-form__input' type='text' value={name} />
      </div>
    </div>
  );
};

export default CardEdit;
