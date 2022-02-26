import React from 'react';
import logo from '../assets/images/FourSoulsLogo.png';

const HomeHeader = () => {
  return (
    <div className='app-header'>
      <div className='app-header__left'>left</div>
      <div className='app-logo'>
        <img
          src={logo}
          alt='The Binding of Isacc: Four Souls'
          className='app-logo__image'
        />
        <div className='app-logo__title'>Custom Card Maker!</div>
      </div>
      <div className='app-header__right'>right</div>
    </div>
  );
};

export default HomeHeader;
