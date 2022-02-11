import './Header.scss';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { setDark_mode, dark_mode } = useGlobalContext();
  let navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <header className={`${dark_mode ? 'Header dark_mode' : 'Header'}`}>
      <p className='Header__title' onClick={goToHome}>
        Where in the world?
      </p>
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
