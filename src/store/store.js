import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import countryReducer from './reducers/countryReducer';
import filterReducer from './reducers/filterReducer';

const appReducer = combineReducers({
  countries: countryReducer,
  filter: filterReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;