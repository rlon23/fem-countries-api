import './page.scss';
import CountryList from '../components/CountryList/CountryList';
import Filter from '../components/Filter/Filter';
import SearchForm from '../components/SearchForm/SearchForm';
import { useGlobalContext } from '../context';

export default function Home() {
  const { dark_mode } = useGlobalContext();
  return (
    <main className={`${dark_mode ? 'page dark_mode' : 'page'}`}>
      <SearchForm />
      <Filter />
      <CountryList />
    </main>
  );
}
