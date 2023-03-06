import { useState } from 'react';
import Filters from './Filters';
import CountryCard from './CountryCard';

export default function Home() {
  const [countries, setCountries] = useState([]);

  return (
    <main className='max-w-screen-2xl mx-auto px-4'>
      <Filters />

      <ul>
        {countries.map((country) => (
          <li>
            <CountryCard />
          </li>
        ))}
      </ul>
    </main>
  );
}
