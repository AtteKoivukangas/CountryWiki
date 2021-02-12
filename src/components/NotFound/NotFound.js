import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Button } from 'react-bootstrap';

const NotFound = () => (
  <div>
    <h1>404</h1>
    <hr />
    <h3>Looks like this page doesn't exist.</h3>

    <Button as={ Link } to='/'>
      Back to search
    </Button>
  </div>
);

export default NotFound;