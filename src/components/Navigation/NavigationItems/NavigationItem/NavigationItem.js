import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            // make NavLink use CSS module class styles I made (not react-router-dom's)
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;