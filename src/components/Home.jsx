import Filters from './Filters';
import CountryCard from './CountryCard';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const { countries } = useOutletContext();

  return (
    <main className='max-w-screen-2xl mx-auto px-4 md:px-12 2xl:px-0'>
      <Filters />

      <ul className='grid gap-8 justify-evenly md:grid-cols-fill-40 lg:gap-12'>
        {countries.map((country) => (
          <li
            key={country.cca3}
            className='bg-white dark:bg-gray-700 dark:shadow-gray-900 dark:text-gray-200 shadow-md w-80 shadow-gray-300 rounded-md'
          >
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </main>
  );
}
