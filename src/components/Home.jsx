import Filters from './Filters';
import CountryCard from './CountryCard';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const { countries } = useOutletContext();
  const [query, setQuery] = useState('');
  const [currentRegion, setCurrentRegion] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleRegionChange = (region) => {
    setCurrentRegion(region);
  };

  const searchCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(query.toLowerCase());
  });

  const filteredCountries = searchCountries.filter((country) => {
    return country.continents.some((continent) =>
      continent.toLowerCase().includes(currentRegion),
    );
  });

  return (
    <main className='max-w-screen-2xl mx-auto px-4 py-8 md:px-12 2xl:px-0'>
      <Filters
        handleRegionChange={handleRegionChange}
        handleSearch={handleSearch}
        query={query}
      />

      <ul className='grid gap-8 justify-evenly md:grid-cols-fill-40 lg:gap-12'>
        {filteredCountries.map((country) => (
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
