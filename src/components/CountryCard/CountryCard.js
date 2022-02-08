import './CountryCard.scss';

function CountryCard({ dark_mode, name, population, region, capital, flag }) {
  return (
    <article
      className={`${
        dark_mode
          ? 'CountryCard dark_mode has_shadow'
          : 'CountryCard has_shadow'
      }`}
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