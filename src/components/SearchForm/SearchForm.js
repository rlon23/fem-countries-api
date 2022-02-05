import './SearchForm.scss';

function SearchForm({ dark_mode }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        />
      </form>
    </section>
  );
}

export default SearchForm;
