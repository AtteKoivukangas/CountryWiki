import React from 'react';
import './AppLoader.css';

// Components
import { Spinner } from 'react-bootstrap';

const AppLoader = ({ active, component }) => {
    if (!active) return null;

    return (
      <div className={ `app-loader${ component ? ' component-loader' : '' }` }>
            <div>
                <Spinner
                    animation="border"
                    role="status"
                    variant={ component ? 'secondary' : 'light' }
                >
                    <span className="sr-only">Loading</span>
                </Spinner>
            </div>
        </div>
    );
};

export default AppLoader;