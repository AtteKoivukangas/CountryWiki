import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import countryService from './services/countries';
import CountryList from './components/CountryList';
import Country from './components/Country';
import Filter from './components/Filter';
import Footer from './components/Footer';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredCountries = countries.filter(country => {
    const name = country.name.toLowerCase();
    const subregion = country.subregion.toLowerCase();
    const loweredFilter = filter.toLowerCase();

    return name.includes(loweredFilter) || subregion.includes(loweredFilter);
  });

  useEffect(() => {
    (async () => setCountries(await countryService.getAll()))();
  }, []);

  const isLoading = () => {
    return countries.length === 0;
  };

  const getCountry = code => {
    const len = countries.length;
    for (let i = 0; i < len; i++) {
      const countryCode = countries[i].alpha2Code.toLowerCase();

      if (countryCode === code.toLowerCase()) {
        return countries[i];
      }
    }

    return null;
  };

  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact={true}>
          <Filter value={filter} setFilter={setFilter} />
          <CountryList countries={filteredCountries} />
        </Route>
        <Route path='/:countryCode'>
          <Country getCountry={getCountry} isLoading={isLoading} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;