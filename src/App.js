import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CountryInfo from './pages/CountryInfo';
import Home from './pages/Home';
import { useGlobalContext } from './context';
import { ScrollToTop } from './ScrollToTop';

function App() {
  const { dark_mode } = useGlobalContext();
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className={`${dark_mode ? 'App dark_mode' : 'App'}`}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country/:name' element={<CountryInfo />} />
          </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
