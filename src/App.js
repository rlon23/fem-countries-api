import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CountryInfo from './pages/CountryInfo';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:name' element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
