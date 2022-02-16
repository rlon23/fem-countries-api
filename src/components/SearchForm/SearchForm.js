import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context';
import './SearchForm.scss';

function SearchForm() {
  const { dark_mode, filterByWord } = useGlobalContext();
  const searchValue = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section
      className={`${
        dark_mode ? 'SearchForm section dark_mode' : 'SearchForm section'
      }`}
    >
      <form className='SearchForm__form' onSubmit={handleSubmit}>
        <label htmlFor='search' className='SearchForm__label' />
        <input
          type='text'
          name='search'
          id='search'
          className='SearchForm__input has_shadow'
          placeholder='Search for a country...'
          ref={searchValue}
          onChange={() => filterByWord(searchValue.current.value)}
        />
      </form>
    </section>
  );
}

export default SearchForm;
