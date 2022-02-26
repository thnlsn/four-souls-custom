//* Imports
import React, { useState } from 'react';

//* Components
import Backs from './components/CardBacks';
import Header from './components/HomeHeader';

//* Context
import { CardContext } from './state/context';

function App() {
  const [cardType, setCardType] = useState(null);

  const changeCardType = (card) => {
    setCardType(card);
  };

  return (
    <div className='App'>
      <CardContext.Provider
        value={{
          cardType,
          changeCardType,
        }}
      >
        <Header />
        <Backs />
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
