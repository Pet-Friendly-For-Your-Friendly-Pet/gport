import React from 'react';

// Set up class on a div that wraps a component
const withClass = props => {

    // className passed to withClass component as props.classes
    <div className={props.classes}>

        {/* return wrapped elements */}
        {props.children}

    </div>
};

export default withClass;