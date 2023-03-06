import { useState } from 'react';
import ListBox from './ListBox';

export default function Filters() {
  return (
    <form className='my-8 flex-row space-y-8'>
      <input
        type='search'
        className='py-2 px-4 w-full rounded-md shadow-md shadow-gray-300 dark:bg-gray-700 dark:shadow-gray-900'
      />

      <ListBox />
    </form>
  );
}
