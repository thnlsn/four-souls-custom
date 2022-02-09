//* Imports
import logo from './assets/images/FourSoulsLogo.png';

function App() {
  return (
    <div className='App'>
      <div className='app-header'>
        <img
          src={logo}
          alt='The Binding of Isacc: Four Souls'
          className='app-header__logo'
        />
        <div className='app-header__title'>Custom Card Maker</div>
      </div>
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
