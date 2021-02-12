import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// State management
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from './store/actions/countries';

// Components
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import AppLoader from './components/AppLoader';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.countries.loading);

  useEffect(() => {
    dispatch( loadCountries() );
  }, [dispatch]);

  return (
    <div className='container'>
      <AppLoader active={ loading } />

      <Switch>
        <Route path='/' exact component={ HomePage } />
        <Route path='/:countryCode' component={ CountryPage } />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;