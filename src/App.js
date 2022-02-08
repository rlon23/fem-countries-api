import './App.scss';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

import SearchForm from './components/SearchForm/SearchForm';
import Filter from './components/Filter/Filter';
import CountryCard from './components/CountryCard/CountryCard';
const url = 'https://restcountries.com/v3.1/all';

function App() {
  const [dark_mode, setDark_mode] = useState(false);
  const [filter_open, setFilter_open] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [regionFilter, setRegionFilter] = useState('all');

  const getCountries = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(
        countries.sort((a, b) =>
          a.name.common > b.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        )
      );
      console.log(countries);
      createRegionsFilter(countries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const createRegionsFilter = (countries) => {
    const regions = [
      ...new Set(countries.map((country) => country.region)),
    ].sort();
    setRegionList(regions);
  };

  const filterByRegion = (regionName) => {
    const filtered = countries.filter(
      (country) => country.region === regionName
    );
    setRegionFilter(regionName);
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDark_mode(true);
    }

    getCountries();
  }, [getCountries]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={`${dark_mode ? 'App dark_mode' : 'App'}`}>
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

      <main className='App__main'>
        <SearchForm dark_mode={dark_mode} />

        <Filter
          dark_mode={dark_mode}
          filter={regionList}
          filter_open={filter_open}
          setFilter_open={setFilter_open}
          countries={countries}
          filterByRegion={filterByRegion}
          setRegionFilter={setRegionFilter}
        />

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
      </main>
    </div>
  );
}

export default App;
