import React from 'react';
import { useHistory } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(country.alpha2Code);
  };

  return (
    <div className={`country-card card ${window.innerWidth > 768 && 'flex-row'} flex-wrap`} onClick={handleClick}>
      <div className='card-header border-0'>
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          width="200"
        />
      </div>
      <div className='card-block px-2 pt-3'>
        <h4>{country.name}</h4>
        <p>
          {country.subregion} <br />
          Population {country.population}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;