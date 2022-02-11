import './page.scss';
import './CountryInfo.scss';

import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
const url = 'https://restcountries.com/v3.1/name/';

export default function CountryInfo() {
  const { name } = useParams();
  const { countries, isLoading, dark_mode } = useGlobalContext();
  const [country, setCountry] = useState(null);
  let navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const getCountryInfo = useCallback(() => {
    countries.forEach((item) => {
      if (item.name.common === name) {
        const {
          flags,
          name: countryName,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        } = item;

        const newCountry = {
          flags,
          countryName,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        };
        setCountry(newCountry);
      }
    });
  }, [countries, name]);

  useEffect(() => {
    getCountryInfo(name);
  }, [getCountryInfo, name]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!country) {
    return (
      <div
        className={`${
          dark_mode ? 'CountryInfo page dark_mode' : 'CountryInfo page'
        }`}
      >
        <p>didn't load</p>
      </div>
    );
  } else {
    const {
      flags,
      countryName,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
    } = country;
    return (
      <div
        className={`${
          dark_mode ? 'CountryInfo page dark_mode' : 'CountryInfo page'
        }`}
      >
        <button onClick={goToHome}>
          <FaArrowLeft />
          Back
        </button>
        <div className='CountryInfo__flag'>
          <img src={flags.svg} alt='' />
        </div>
        <p>{name}</p>
        <p>
          <span>Official Name: </span>
          {countryName.official}
        </p>
        <p>
          <span>Population: </span>
          {new Intl.NumberFormat().format(population)}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Sub Region: </span>
          {subregion}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
        <p>
          <span>Top Level Domain: </span>
          {tld}
        </p>
        <p>
          <span>Currencies: </span>
          {console.log(currencies)}
        </p>

        <p>
          <span>Languages: </span>
          {Object.values(languages)}
        </p>

        <p>
          <span>Border Countries: </span>
          {Object.values(borders)}
        </p>
      </div>
    );
  }
}
