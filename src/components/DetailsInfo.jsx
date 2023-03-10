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
    <>
      <img src={svg} alt={alt} />

      <div className='leading-7 text-sm'>
        <h1 className='font-extrabold text-xl my-6'>{name}</h1>
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

        <div className='my-6'>
          <p>
            <span className='font-semibold'>Top Level Domain: </span>
            {tld}
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

        <div>
          <h1 className='font-semibold mb-4 text-lg'>Border Countries:</h1>
          {borders
            ? borders.map((cca3) => {
                const borderFound = findBorders(cca3);
                return (
                  <Link
                    to={`/country/${borderFound.name.common}`}
                    key={cca3}
                    className='shadow-md rounded-md mr-4 shadow-gray-300 py-2 px-4 bg-white'
                  >
                    {borderFound.name.common}
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
