import {
  FILTER_CHANGE
} from './actions';

export const onFilterChange = data => ({
  type: FILTER_CHANGE,
  data
});