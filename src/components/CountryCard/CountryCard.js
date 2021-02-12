import React from 'react';
import { useHistory } from 'react-router-dom';
import './CountryCard.css';

// Components
import { Card } from 'react-bootstrap';

const CountryCard = ({ country }) => {
  const history = useHistory();

  const handleClick = () => {
    const { alpha2Code } = country;
    history.push(alpha2Code);
  };

  const {
    name,
    flag,
    subregion,
    population
  } = country;

  return (
    <Card className={`country-card${ window.innerWidth > 768 ? ' flex-row' : '' } flex-wrap`} onClick={handleClick}>
      <Card.Header>
        <img
          src={ flag }
          alt={`${ name } flag`}
          width="200"
        />
      </Card.Header>

      <Card.Body>
        <h4>{ name }</h4>
        <p>
          { subregion } <br />
          Population { population }
        </p>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;