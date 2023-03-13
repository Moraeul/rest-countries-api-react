import { Listbox } from '@headlessui/react';
import { Fragment } from 'react';
import { useState } from 'react';
import { BiChevronDown, BiCheck } from 'react-icons/bi';

const regions = [
  { id: 0, value: '', name: 'Filter By Region' },
  { id: 1, value: 'africa', name: 'Africa' },
  { id: 2, value: 'america', name: 'America' },
  { id: 3, value: 'asia', name: 'Asia' },
  { id: 4, value: 'europe', name: 'Europe' },
  { id: 5, value: 'oceania', name: 'Oceania' },
];

export default function ListBox({ handleRegionChange }) {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <Listbox value={selectedRegion} onChange={setSelectedRegion}>
      <div className='relative'>
        <Listbox.Button className='inline-flex w-52 items-center justify-between rounded-md bg-white py-4 px-6 text-sm shadow-md shadow-gray-300 dark:bg-gray-700 dark:text-white dark:shadow-md dark:shadow-gray-900'>
          {selectedRegion.name} <BiChevronDown className='h-5 w-5' />
        </Listbox.Button>

        <Listbox.Options
          onChange={handleRegionChange(selectedRegion.value)}
          className='absolute top-14 flex w-52 flex-col rounded-md bg-white p-1 shadow-md shadow-gray-300 dark:bg-gray-700 dark:shadow-gray-900'
        >
          {regions.map((country) => (
            <Listbox.Option key={country.id} value={country} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`relative inline-flex cursor-pointer select-none items-center justify-between rounded py-2 px-5 text-sm ${
                    active
                      ? 'bg-gray-700 text-white dark:bg-gray-300 dark:text-black'
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
  );
}
