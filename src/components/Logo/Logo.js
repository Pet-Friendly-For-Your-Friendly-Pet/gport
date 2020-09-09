import React from 'react';
import classes from './Logo.module.css';

import navLogo from '../../assets/img/logo/logo_bw.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <a href="http://localhost:3000/"><img src={navLogo} alt="logo_bw" /></a>
    </div>
);

export default logo; 