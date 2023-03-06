import { Listbox } from '@headlessui/react';

export default function Filters() {
  return (
    <form action=''>
      <input
        type='search'
        className='py-2 px-4 w-full rounded-md shadow-md shadow-gray-900'
      />

      <Listbox>
        <div>
          <Listbox.Button className='bg-gray-700 rounded-md shadow-md shadow-gray-900 py-2 px-4'>
            Filter by country
          </Listbox.Button>

          <Listbox.Options></Listbox.Options>
        </div>
      </Listbox>
    </form>
  );
}
