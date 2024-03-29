//* Imports
import React, { useState } from 'react';

//* Components
import Backs from './components/CardBacks';
import Header from './components/HomeHeader';
import Edit from './components/CardEdit';

//* Context
import { CardContext } from './state/context';

function App() {
  const [cardType, setCardType] = useState(null);
  // Card detail tate
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [health, setHealth] = useState(0);
  const [damage, setDamage] = useState(0);
  const [effects, setEffects] = useState([]);
  const [reminder, setReminder] = useState('');
  const [flavor, setFlavor] = useState('');
  const [item, setItem] = useState('');

  const changeCardType = (card) => setCardType(card);
  // Card detail update state
  const changeName = (name) => setName(name);
  const changeImage = (image) => setImage(image);
  const changeHealth = (health) => setHealth(health);
  const changeDamage = (damage) => setDamage(damage);
  const changeEffects = (effects) => setEffects(effects);
  const changeReminder = (reminder) => setReminder(reminder);
  const changeFlavor = (flavor) => setFlavor(flavor);
  const changeItem = (item) => setItem(item);

  return (
    <div className='App'>
      <CardContext.Provider
        value={{
          cardType,
          changeCardType,
          // Card detail state
          name,
          changeName,
          image,
          changeImage,
          health,
          changeHealth,
          damage,
          changeDamage,
          effects,
          changeEffects,
          reminder,
          changeReminder,
          flavor,
          changeFlavor,
          item,
          changeItem,
        }}
      >
        <Header />
        {cardType ? <Edit /> : <Backs />}
      </CardContext.Provider>
    </div>
  );
}

// App level will have header, content, footer
// Content will have the choice screen for what kind of card
export default App;

//? EXTRA ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? We should allow a toggle for bleedzones

/*
      <div className='font-title header'>Header</div>
      <div className='font-body content'></div>
      <div className='font-body footer'>Footer</div>
*/

/*
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
      <div className='app-content'>
        <CardBack card='char' />
        <CardBack card='eter' />
        <CardBack card='tres' />
        <CardBack card='loot' />
        <CardBack card='mons' />
        <CardBack card='room' />
        <CardBack card='soul' />
        {        <CardBack card='isa' />
        <CardBack card='mom' />
        <CardBack card='bum' />
        <CardBack card='lit' />
        <CardBack card='hus' />
        <CardBack card='del' />
        </div>
*/
