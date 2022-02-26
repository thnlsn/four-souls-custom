import React, { useContext } from 'react';
import { CardContext } from '../state/context';
import logo from '../assets/images/FourSoulsLogo.png';

const HomeHeader = () => {
  const { cardType, changeCardType, name, changeName } =
    useContext(CardContext);
  return (
    <div className='app-header'>
      <div className='app-header__left'>
        <div style={{ width: '10rem' }}>
          <div>{cardType}</div>
          <div>{name}</div>
        </div>
      </div>
      <div className='app-logo'>
        <img
          src={logo}
          alt='The Binding of Isacc: Four Souls'
          className='app-logo__image'
        />
        <div className='app-logo__title'>Custom Card Maker!</div>
      </div>
      <div className='app-header__right' onClick={() => changeCardType(null)}>
        Reset
      </div>
    </div>
  );
};

export default HomeHeader;
