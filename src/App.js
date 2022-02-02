import './App.scss';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [dark_mode, setDark_mode] = useState(false);
  return (
    <div className={`${dark_mode ? 'App dark_mode' : 'App'}`}>
      <header className='App-header'>
        <p className='App-header__title'>Where in the world?</p>
        <div
          className='dark-mode-toggle'
          onClick={() => setDark_mode(!dark_mode)}
        >
          {dark_mode ? <FaMoon /> : <FaRegMoon />}
          <p className='dark-mode-toggle__text'>Dark Mode</p>
        </div>
      </header>
    </div>
  );
}

export default App;
