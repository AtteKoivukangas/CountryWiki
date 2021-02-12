import React from 'react';

// State management
import { useDispatch, useSelector } from 'react-redux';
import { onFilterChange } from '../../store/actions/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = ({ target }) => {
    dispatch( onFilterChange(target.value) );
  }

  return (
    <div className='m-3'>
      Search: {' '}
      <input value={ filter } onChange={ handleChange } />
    </div>
  );
};

export default Filter;