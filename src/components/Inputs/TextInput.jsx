import React from 'react';
import { kebabCase } from '../../helpers';

const TextInput = ({ label, state, changeState }) => (
  <div className='card-form__input-box'>
    <label className='card-form__input-label font-body' for={kebabCase(label)}>
      {label}
    </label>
    <input
      className='card-form__input'
      id={kebabCase(label)}
      type='text'
      value={state}
      onChange={({ target: { value } }) => changeState(value)}
    />
  </div>
);

export default TextInput;
