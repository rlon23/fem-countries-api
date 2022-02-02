import './App.scss';
import { FaRegMoon, FaMoon } from 'react-icons/fa';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p className='App-header__title'>Where in the world?</p>
        <div className='dark-mode-toggle'>
          <FaRegMoon />
          <p className='dark-mode-toggle__text'>Dark Mode</p>
        </div>
      </header>
    </div>
  );
}

export default App;
