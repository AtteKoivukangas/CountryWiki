import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Sorry</h1>
    <h3>Looks like this page doesn't exist.</h3>
    <Link to='/'>Back to search</Link>
  </div>
);

export default NotFound;