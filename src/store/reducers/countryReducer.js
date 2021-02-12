import {
  COUNTRIES_REQUEST_BEGIN,
  COUNTRIES_REQUEST_SUCCESS,
  COUNTRIES_REQUEST_FAILURE
} from '../actions';

const initialState = {
  loading: false,
  data: []
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_REQUEST_BEGIN:
      return {
        ...state,
        loading: true
      };

    case COUNTRIES_REQUEST_SUCCESS: {
      const { data } = action;

      return {
        loading: false,
        data
      };
    };

    case COUNTRIES_REQUEST_FAILURE:
      return {
        loading: false
      };

    default: 
      return state;
  }
};

export default countryReducer;