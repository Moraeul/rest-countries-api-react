import Filters from './Filters';
import CountryCard from './CountryCard';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const { countries } = useOutletContext();

  return (
    <main className='max-w-screen-2xl mx-auto px-4'>
      <Filters />

      <ul className='space-y-8'>
        {countries.map((country) => (
          <li
            key={country.cca3}
            className='bg-white shadow-md shadow-gray-300 rounded-md'
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </main>
  );
}
