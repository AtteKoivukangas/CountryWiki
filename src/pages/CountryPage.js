import React from 'react';
import { useParams, Link } from 'react-router-dom';

// State management
import { useCountry } from '../hooks';
import { useSelector } from 'react-redux';

// Components
import NotFound from '../components/NotFound';
import { Card, Button } from 'react-bootstrap';

const CountryPage = () => {
  const countryCode = useParams().countryCode;
  const country = useCountry(countryCode);
  const loading = useSelector(state => state.countries.loading);

  if (loading) return null;
  if (!country) return <NotFound />;

  const {
    flag,
    name,
    population,
    capital
  } = country;

  const languageRows = country.languages.map(lang =>
    <li key={ lang.name }>
      { lang.name }
    </li>
  );

  const currencyRows = country.currencies.map(currency =>
    <li key={ currency.name }>
      { currency.name } { currency.symbol }
    </li>
  );

  return (
    <div>
      <Button
        className='m-2'
        variant='primary'
        as={Link}
        to='/'
      >
        Home
      </Button>

      <Card> 
        <Card.Body>
          <div className='image-wrapper'>
            <img
              className='country-flag mb-3'
              src={flag}
              alt={`${name} flag`}
            />
          </div>

          <h1>{ name }</h1>
          <p>
            Population: { population } <br />
            Capital: { capital }
          </p>

          <h4>Languages</h4>
          <ul>{ languageRows }</ul>

          <h4>Currencies</h4>
          <ul>{ currencyRows }</ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryPage;