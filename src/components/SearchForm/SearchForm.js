import './SearchForm.scss';

function SearchForm({ dark_mode }) {
  return (
    <section
      className={`${
        dark_mode ? 'SearchForm section dark_mode' : 'SearchForm section'
      }`}
    >
      <form action='' className='SearchForm__form'>
        <label htmlFor='search' className='SearchForm__label' />
        <input
          type='text'
          name='search'
          id='search'
          className='SearchForm__input'
          placeholder='Search for a country...'
        />
      </form>
    </section>
  );
}

export default SearchForm;
