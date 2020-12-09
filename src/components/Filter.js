import React from 'react';

const Filter = ({ value, setFilter }) => (
    <div className='m-3'>
      Search: {' '}
      <input
        value={value}
        onChange={({ target }) => setFilter(target.value)}
      />
    </div>
);

export default Filter;