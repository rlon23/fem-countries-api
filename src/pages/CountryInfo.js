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

        const langArr = Object.keys(languages).map((key) => languages[key]);
        const currArr = Object.keys(currencies).map((key) => currencies[key]);

        const newCountry = {
          flags,
          countryName,
          population,
          region,
          subregion,
          capital,
          tld,
          currArr,
          langArr,
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
        <p>Country doesn't exist</p>
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
      currArr,
      langArr,
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
          {`${currArr[0].name} ${currArr[0].symbol}`}
        </p>

        {langArr ? (
          <p>
            <span>Languages: </span>
            {langArr.join(', ')}
          </p>
        ) : null}

        {borders ? (
          <p>
            <span>Border Countries: </span>
            {borders.map((item) => {
              return <button key={item}>{item}</button>;
            })}
          </p>
        ) : null}
      </div>
    );
  }
}
