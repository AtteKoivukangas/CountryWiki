import React, { useState, useEffect } from 'react';

// Hooks
import { useFilteredCountries } from '../../hooks';

// Components
import { Button } from 'react-bootstrap';
import CountryCard from '../CountryCard';

const CountryList = () => {
  const countries = useFilteredCountries();
  const [countriesToShow, setCountriesToShow] = useState(10);

  useEffect(() => setCountriesToShow(10), []);

  const showMore = () => setCountriesToShow(countriesToShow + 10);
  const showLess = () => setCountriesToShow(countriesToShow - 10);

  const countryCards = countries.slice(0, countriesToShow)
    .map(country =>
      <CountryCard
        key={ country.name }
        country={ country }
      />
    );

  return (
    <div>
      { countryCards }

      { countriesToShow < countries.length &&
        <Button
          variant='primary'
          className='mt-2 mr-3'
          onClick={ showMore }
        >
          Show more
        </Button>
      }
      
      { countriesToShow > 10 &&
        <Button
          variant='secondary'
          className='mt-2 mr-3'
          onClick={ showLess }
        >
          Show less
        </Button>
      }
    </div>
  );
};

export default CountryList;