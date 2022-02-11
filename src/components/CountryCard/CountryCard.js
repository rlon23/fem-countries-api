import './CountryCard.scss';
import { useNavigate } from 'react-router-dom';

function CountryCard({ dark_mode, name, population, region, capital, flag }) {
  let navigate = useNavigate();

  const goToInfo = () => {
    navigate(`/country/${name}`);
  };

  return (
    <article
      className={`${
        dark_mode
          ? 'CountryCard dark_mode has_shadow'
          : 'CountryCard has_shadow'
      }`}
      onClick={goToInfo}
    >
      <div className='CountryCard__flag'>
        <img src={flag} alt='' />
      </div>
      <div className='CountryCard__info'>
        <h3 className='CountryCard__name'>{name}</h3>
        <p className='CountryCard__population'>
          <span>Population: </span>
          {new Intl.NumberFormat().format(population)}
        </p>
        <p className='CountryCard__region'>
          <span>Region: </span>
          {region}
        </p>
        <p className='CountryCard__capital'>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;
