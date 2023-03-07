import { Link } from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-white dark:bg-gray-700 dark:shadow-gray-900 dark:text-gray-200 py-6 px-4 shadow-md shadow-gray-200 md:px-12'>
      <div className='justify-between max-w-screen-2xl items-center flex mx-auto'>
        <Link to='/'>
          <h1 className='text-sm font-semibold inline-flex items-center md:text-xl'>
            <BiWorld className='mr-1' /> Where in the world?
          </h1>
        </Link>
        <button className='text-xs inline-flex items-center md:text-base lg:text-base'>
          {localStorage.theme === 'dark' ? (
            <FaMoon className='mr-1' />
          ) : (
            <FaSun className='mr-1' />
          )}
          Theme
        </button>
      </div>
    </header>
  );
}
