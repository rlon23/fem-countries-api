import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList/CountryList';
import SearchForm from './components/SearchForm/SearchForm';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <BrowserRouter>
      <SearchForm />
      <Filter />
      <CountryList />
    </BrowserRouter>
  );
  // return (
  //   <div className={`${dark_mode ? 'App dark_mode' : 'App'}`}>
  //     <main className='App__main'>
  //
  //     </main>
  //   </div>
  // );
}

export default App;
