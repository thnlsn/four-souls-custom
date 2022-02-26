import React, { useContext } from 'react';
import { CardContext } from '../state/context';
import logo from '../assets/images/FourSoulsLogo.png';

const HomeHeader = () => {
  const { cardType, changeCardType } = useContext(CardContext);
  return (
    <div className='app-header'>
      <div className='app-header__left'>{cardType}</div>
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
