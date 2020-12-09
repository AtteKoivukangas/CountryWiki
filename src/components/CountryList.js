import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  const [countriesToShow, setCountriesToShow] = useState(10);
  const countriesToRender = countries.slice(0, countriesToShow);

  useEffect(() => {
    setCountriesToShow(10);
  }, [countries]);

  const showMore = () => setCountriesToShow(countriesToShow + 10);
  const showLess = () => setCountriesToShow(countriesToShow - 10);

  return (
    <div>
      {countriesToRender.map(country =>
        <CountryCard
          key={country.name}
          country={country}
        />
      )}

      { countriesToShow < countries.length &&
        <button className='btn btn-primary mt-2 mr-3' onClick={() => showMore()}>
          Show more
        </button>
      }
      
      { countriesToShow > 10 &&
        <button className='btn btn-secondary mt-2' onClick={() => showLess()}>
          Show Less
        </button>
      }
    </div>
  );
};

export default CountryList;