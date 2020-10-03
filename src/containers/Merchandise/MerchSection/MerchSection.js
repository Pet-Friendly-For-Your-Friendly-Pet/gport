import React from 'react';

import classes from './MerchSection.module.css';

const merchSection = (props) => (
    <div className={classes.Content}>
        <h1>{props.title}</h1>
        <div>Merch Item component</div>
    </div>
);

export default merchSection;