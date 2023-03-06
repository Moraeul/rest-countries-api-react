import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Outlet context={{ countries }} />
    </>
  );
}

export default App;
