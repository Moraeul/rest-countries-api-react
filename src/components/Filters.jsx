import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ListBox from './ListBox';

export default function Filters() {
  return (
    <form className='my-8 flex-row space-y-8'>
      <label htmlFor='default-search' className='sr-only text-sm'>
        Search
      </label>

      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 flex items-center pl-6'>
          <AiOutlineSearch className='text-xl text-gray-400 dark:text-gray-100' />
        </div>

        <input
          id='default-search'
          type='search'
          placeholder='Search for a country...'
          className='py-4 pl-16 text-sm pr-6 w-full rounded-md shadow-md shadow-gray-300 dark:bg-gray-700 dark:text-white dark:shadow-gray-900 dark:placeholder:text-white'
        />
      </div>

      <ListBox />
    </form>
  );
}
