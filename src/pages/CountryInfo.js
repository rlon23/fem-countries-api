import './page.scss';
import './CountryInfo.scss';

import { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

export default function CountryInfo() {
  const { name } = useParams();
  const { countries, isLoading, dark_mode } = useGlobalContext();
  const [country, setCountry] = useState(null);
  let navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToCountry = (cName) => {
    navigate(`/country/${cName}`);
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
        const bordersArr = [];
        const getBorderFullName = () => {
          if (borders) {
            for (let i = 0; i < countries.length; i++) {
              for (let j = 0; j < borders.length; j++) {
                if (countries[i].cca3 === borders[j]) {
                  bordersArr.push(countries[i].name.common);
                }
              }
            }
          }
        };
        getBorderFullName();

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
          bordersArr,
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
      bordersArr,
    } = country;
    return (
      <div
        className={`${
          dark_mode ? 'CountryInfo page dark_mode' : 'CountryInfo page'
        }`}
      >
        <button className='btn has_shadow' onClick={goToHome}>
          <FaArrowLeft />
          Back
        </button>
        <div className='CountryInfo__flag'>
          <img src={flags.svg} alt='' />
        </div>
        <div className='main-info'>
          <p className='common-name'>{name}</p>

          <p className='p'>
            <span>Official Name: </span>
            {countryName.official}
          </p>
          <p className='p'>
            <span>Population: </span>
            {new Intl.NumberFormat().format(population)}
          </p>
          <p className='p'>
            <span>Region: </span>
            {region}
          </p>
          <p className='p'>
            <span>Sub Region: </span>
            {subregion}
          </p>
          <p className='p'>
            <span>Capital: </span>
            {capital}
          </p>
        </div>

        <div className='secondary-info'>
          <p className='p'>
            <span>Top Level Domain: </span>
            {tld.join(', ')}
          </p>
          <p className='p'>
            <span>Currencies: </span>
            {`${currArr[0].name} (${currArr[0].symbol})`}
          </p>

          {langArr ? (
            <p className='p'>
              <span>Languages: </span>
              {langArr.join(', ')}
            </p>
          ) : null}
        </div>

        {bordersArr.length ? (
          <div className='border-countries'>
            <p className='p'>Border Countries:</p>
            {console.log(bordersArr)}
            <div className='countries-buttons'>
              {bordersArr.map((ctry) => {
                return (
                  <button
                    className='btn btn-country has_shadow'
                    key={ctry}
                    onClick={() => goToCountry(ctry)}
                  >
                    {ctry}
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
