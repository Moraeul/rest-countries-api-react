import DetailsInfo from './DetailsInfo';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

export default function Details() {
  const { countries } = useOutletContext();
  const { name } = useParams();
  const navigate = useNavigate();

  const currentCountry = countries.find(
    (country) => country.name.common === name,
  );

  return (
    <main className='max-w-screen-2xl font-nunito mx-auto px-4 py-8 py md:px-12 2xl:px-0'>
      <button
        onClick={() => navigate(-1)}
        className='inline-flex py-2 px-8 mb-12 rounded-md items-center dark:bg-gray-700 dark:text-gray-200 dark:shadow-gray-900 bg-white shadow-md shadow-gray-300'
      >
        <HiOutlineArrowLeft className='mr-2' /> Back
      </button>

      <DetailsInfo countries={countries} currentCountry={currentCountry} />
    </main>
  );
}
