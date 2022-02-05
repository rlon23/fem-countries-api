import './App.scss';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Filter from './components/Filter/Filter';

function App() {
  const [dark_mode, setDark_mode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDark_mode(true);
    }
  }, []);

  useEffect(() => {}, []);

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
      <main className='App__main'>
        <SearchForm dark_mode={dark_mode} />
        <Filter dark_mode={dark_mode} />
      </main>
    </div>
  );
}

export default App;
