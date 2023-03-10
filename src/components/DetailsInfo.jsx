import { Link } from 'react-router-dom';

export default function CountryDetailsInfo({ currentCountry, countries }) {
  if (!currentCountry) return;

  const {
    altSpellings,
    borders,
    capital,
    currencies,
    flags: { svg, alt },
    languages,
    name: { common: name },
    population,
    region,
    subregion,
    tld,
  } = currentCountry;

  const findBorders = (border) => {
    return countries.find((country) => country.cca3 === border);
  };

  const formattedPopulation = population.toLocaleString('en-US');
  const formattedLanguages = Object.values(languages).join(', ');

  const formattedCurrencies = Object.values(currencies).map(
    (curr) => curr.name,
  );

  return (
    <div className='xl:flex xl:space-x-20'>
      <img src={svg} alt={alt} className='xl:max-w-[50%]' />

      <div className='leading-7 text-sm dark:text-gray-200'>
        <h1 className='font-extrabold text-xl my-6'>{name}</h1>

        <div className='md:flex md:space-x-20 mb-6'>
          <div>
            <p>
              <span className='font-semibold'>Native Name: </span>
              {altSpellings[1]}
            </p>
            <p>
              <span className='font-semibold'>Population: </span>
              {formattedPopulation}
            </p>
            <p>
              <span className='font-semibold'>Region: </span>
              {region}
            </p>
            <p>
              <span className='font-semibold'>Sub Region: </span>
              {subregion}
            </p>
            <p>
              <span className='font-semibold'>Capital: </span>
              {capital}
            </p>
          </div>

          <div className='my-6 md:m-0'>
            <p>
              <span className='font-semibold'>Top Level Domain: </span>
              {tld.join(', ')}
            </p>
            <p>
              <span className='font-semibold'>Currencies: </span>
              {formattedCurrencies}
            </p>
            <p>
              <span className='font-semibold'>Languages: </span>
              {formattedLanguages}
            </p>
          </div>
        </div>

        <div>
          <h1 className='font-semibold mb-2 text-lg'>Border Countries:</h1>
          <div className='flex-wrap'>
            {borders
              ? borders.map((cca3) => {
                  const borderFound = findBorders(cca3);
                  return (
                    <Link
                      to={`/country/${borderFound.name.common}`}
                      key={cca3}
                      className='shadow-md mb-3 inline-block rounded-md mr-3 shadow-gray-300 py-1 px-4 bg-white dark:bg-gray-700 dark:shadow-sm dark:shadow-gray-900'
                    >
                      {borderFound.name.common}
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
