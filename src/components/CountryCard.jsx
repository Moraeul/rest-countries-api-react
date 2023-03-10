import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  const {
    name: { common: name },
    capital,
    flags: { alt, svg },
    population,
    region,
  } = country;

  return (
    <Link to={`country/${name}`}>
      <div>
        <img
          src={svg}
          alt={alt}
          className='w-full h-48 rounded-t-md object-cover'
        />
      </div>
      <div className='p-8'>
        <h1 className='font-bold text-xl mb-4'>{name}</h1>
        <div>
          <p>
            <span className='text-sm font-semibold'>Population: </span>{' '}
            {population.toLocaleString('en-US')}
          </p>
          <p>
            <span className='text-sm font-semibold'>Region: </span>
            {region}
          </p>
          <p>
            <span className='text-sm font-semibold'>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
