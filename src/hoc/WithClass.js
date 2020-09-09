import React from 'react';

// pass the wrapped component & class 
const withClass = (WrappedComponent, className) => {

    // return functional component wrapped in div
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );

};

export default withClass;