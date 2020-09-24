import React from 'react';
import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/design" exact>Design</NavigationItem>
        <NavigationItem link="/merchandise">Merchandise</NavigationItem>
        <NavigationItem link="/sound">Sound</NavigationItem>
    </ul>
);

export default navigationItems;