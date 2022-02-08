import './App.scss';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

import SearchForm from './components/SearchForm/SearchForm';
import Filter from './components/Filter/Filter';
import CountryCard from './components/CountryCard/CountryCard';
const url = 'https://restcountries.com/v2/all';

function App() {
  const [dark_mode, setDark_mode] = useState(false);
  const [filter_open, setFilter_open] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);

  const getCountries = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
      setRegionsFilter(countries);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const setRegionsFilter = (countries) => {
    const regions = [
      ...new Set(countries.map((country) => country.region)),
    ].sort();
    setFilter(regions);
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
          filter={filter}
          filter_open={filter_open}
          setFilter_open={setFilter_open}
        />

        {countries.map((country) => {
          return (
            <CountryCard
              dark_mode={dark_mode}
              key={country.alpha3Code}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
