import './Header.scss';
import { FaMoon, FaRegMoon } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {
  const { setDark_mode, dark_mode } = useGlobalContext();
  let navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (dark_mode) {
      document.body.style.backgroundColor = 'hsla(207, 26%, 17%, 1)';
    } else {
      document.body.style.backgroundColor = 'hsla(0, 0%, 98%, 1)';
    }
  }, [dark_mode]);

  return (
    <header className={`${dark_mode ? 'Header dark_mode' : 'Header'}`}>
      <div className='Header__container'>
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
      </div>
    </header>
  );
}
