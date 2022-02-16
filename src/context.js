import React, { useState, useEffect, useCallback, useContext } from 'react';

const url = 'https://restcountries.com/v3.1/all';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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
      const data = await response.json();
      setCountries(
        data.sort((a, b) =>
          a.name.common > b.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        )
      );
      createRegionsFilter(data);
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

  const filterByWord = (word) => {
    let lowerCase = word.toLowerCase();

    if (word === '') {
      setRegionFilter('all');
    }

    const byWord = countries.filter((country) =>
      country.name.common.toLowerCase().includes(lowerCase)
    );
    setRegionFilter(lowerCase);
    setFilteredCountries(byWord);
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

  return (
    <AppContext.Provider
      value={{
        dark_mode,
        setDark_mode,
        filter_open,
        setFilter_open,
        isLoading,
        setIsLoading,
        countries,
        setCountries,
        regionList,
        setRegionList,
        filteredCountries,
        setFilteredCountries,
        regionFilter,
        setRegionFilter,
        filterByRegion,
        filterByWord,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
