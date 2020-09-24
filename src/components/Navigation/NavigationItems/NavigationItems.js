import React from 'react';
import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Design</NavigationItem>
        <NavigationItem link="/">Merchandise</NavigationItem>
        <NavigationItem link="/">Music</NavigationItem>
    </ul>
);

export default navigationItems;