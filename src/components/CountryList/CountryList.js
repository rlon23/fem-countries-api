import './CountryList.scss';
import React from 'react';
import { useGlobalContext } from '../../context';
import CountryCard from '../CountryCard/CountryCard';

export default function CountryList() {
  const { isLoading, countries, regionFilter, filteredCountries, dark_mode } =
    useGlobalContext();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className='CountryList'>
      {(regionFilter === 'all' ? countries : filteredCountries).map(
        (country) => {
          return (
            <CountryCard
              dark_mode={dark_mode}
              key={country.cca3}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          );
        }
      )}
    </ul>
  );
}
