import {
  COUNTRIES_REQUEST_BEGIN,
  COUNTRIES_REQUEST_SUCCESS,
  COUNTRIES_REQUEST_FAILURE
} from './actions';
import api from '../../api';

export const loadCountries = () => async dispatch => {
  dispatch( onLoadCountries() );

  try {
    const response = await api.get('/');
    dispatch( onLoadCountriesSuccess(response.data) );
  } catch (error) {
    dispatch( onLoadCountriesFailure(error) );
  }
};

const onLoadCountries = () => ({
  type: COUNTRIES_REQUEST_BEGIN,
});

const onLoadCountriesSuccess = data => ({
  type: COUNTRIES_REQUEST_SUCCESS,
  data
});

const onLoadCountriesFailure = error => ({
  type: COUNTRIES_REQUEST_FAILURE,
  error
});