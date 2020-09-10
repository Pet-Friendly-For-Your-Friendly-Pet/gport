import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DesktopOnly} onClick={props.clicked}>
        ...
    </div>
);

export default drawerToggle;