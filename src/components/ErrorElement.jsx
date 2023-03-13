import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='grid h-screen content-center text-center '>
      <h1 className='text-4xl font-bold dark:text-gray-100'>Oops!</h1>
      <p className='my-8 font-semibold dark:text-gray-100'>
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className='text-lg text-gray-400'>
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
