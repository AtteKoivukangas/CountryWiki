import {
  FILTER_CHANGE
} from '../actions';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CHANGE: 
      return action.data;
    
    default:
      return state;
  }
};

export default filterReducer;