import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

export default function PageHeader() {
  const { setDark_mode, dark_mode } = useGlobalContext();
  return (
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
  );
}
