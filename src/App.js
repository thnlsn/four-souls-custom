//* Imports
import logo from './assets/images/FourSoulsLogo.png';

//* Components
import Backs from './components/cardBacks';

function App() {
  return (
    <div className='App'>
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
      <Backs />
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
