import './CountryCard.scss';

function CountryCard({ dark_mode }) {
  return (
    <article
      className={`${
        dark_mode
          ? 'CountryCard dark_mode has_shadow'
          : 'CountryCard has_shadow'
      }`}
    >
      <div className='CountryCard__flag'>
        <img src='' alt='' />
      </div>
      <div className='CountryCard__info'>
        <h3 className='CountryCard__name'>Germany</h3>
        <p className='CountryCard__population'>
          <span>Population: </span>81,770,900
        </p>
        <p className='CountryCard__region'>
          <span>Region: </span>Europe
        </p>
        <p className='CountryCard__capital'>
          <span>Capital: </span>Berlin
        </p>
      </div>
    </article>
  );
}

export default CountryCard;
