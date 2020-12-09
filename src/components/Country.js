import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingAlert from './LoadingAlert';
import NotFound from './NotFound';

const Country = ({ getCountry, isLoading }) => {
  const countryCode = useParams().countryCode;

  if (isLoading()) {
    return (
      <div>
        <Link className='btn btn-primary m-2' to='/'>Home</Link>
        <LoadingAlert />
      </div>
    );
  }

  const country = getCountry(countryCode);
  if (!country) {
    return <NotFound />;
  }

  return (
    <div>
      <div>
        <Link className='btn btn-primary m-2' to='/'>Home</Link>
      </div>

      <div className="card"> 
        <div className="card-body">
          <div className='image-wrapper'>
            <img
              className='country-flag mb-3'
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>

          <h1>{country.name}</h1>

          <p>
            Population: {country.population} <br />
            Capital: {country.capital}
          </p>

          <h4>Languages</h4>

          <ul>
            {country.languages.map(lang =>
              <li key={lang.name}>
                {lang.name}
              </li>
            )}
          </ul>

          <h4>Currencies</h4>

          <ul>
            {country.currencies.map(currency =>
              <li key={currency.name}>
                {currency.name} {currency.symbol}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Country;