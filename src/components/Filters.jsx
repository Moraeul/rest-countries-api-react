import { AiOutlineSearch } from 'react-icons/ai';
import ListBox from './ListBox';

export default function Filters() {
  return (
    <form>
      <label htmlFor='default-search' className='sr-only text-sm'>
        Search
      </label>

      <div className='mb-8 space-y-8 md:flex md:space-y-0 md:justify-between '>
        <div className='relative'>
          <div className='pointer-events-none absolute inset-y-0 flex items-center pl-8 '>
            <AiOutlineSearch className='text-xl text-gray-400 dark:text-gray-100' />
          </div>

          <input
            id='default-search'
            type='search'
            placeholder='Search for a country...'
            className='py-4 pl-16 text-sm pr-6 w-full md:w-96 rounded-md shadow-md shadow-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:shadow-gray-900 dark:placeholder:text-gray-200'
          />
        </div>

        <ListBox />
      </div>
    </form>
  );
}
