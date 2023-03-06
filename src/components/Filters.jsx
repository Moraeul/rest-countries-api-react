import { Listbox } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { BiChevronDown, BiCheck } from 'react-icons/bi';

const countries = [
  { id: 1, name: 'Filter by region' },
  { id: 2, name: 'Africa' },
  { id: 3, name: 'America' },
  { id: 4, name: 'Asia' },
  { id: 5, name: 'Europe' },
  { id: 6, name: 'Oceania' },
];

export default function Filters() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <form action=''>
      <input
        type='search'
        className='py-2 px-4 w-full rounded-md shadow-md shadow-gray-900'
      />

      <Listbox value={selectedCountry} onChange={setSelectedCountry}>
        <div className='relative'>
          <Listbox.Button className='inline-flex w-52 items-center justify-between rounded-md bg-white py-4 px-6 text-sm shadow-md shadow-gray-200 dark:bg-gray-700 dark:text-white dark:shadow-md dark:shadow-gray-900'>
            {selectedCountry.name} <BiChevronDown className='h-5 w-5' />
          </Listbox.Button>

          <Listbox.Options className='absolute top-14 flex w-52 flex-col rounded-md bg-white p-1 shadow-sm shadow-gray-300 dark:bg-gray-700 dark:shadow-gray-900'>
            {countries.map((country) => (
              <Listbox.Option key={country.id} value={country} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`relative inline-flex cursor-pointer select-none items-center justify-between rounded py-2 px-5 text-sm font-semibold ${
                      active
                        ? 'bg-gray-800 text-white dark:bg-gray-200 dark:text-black'
                        : 'bg-white text-gray-900 dark:bg-gray-700 dark:text-white'
                    }`}
                  >
                    {country.name}
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-0.5'>
                        <BiCheck className='h-4 w-4' aria-hidden='true' />
                      </span>
                    ) : null}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </form>
  );
}
