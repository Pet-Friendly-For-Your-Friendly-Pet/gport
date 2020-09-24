import React, { Component } from 'react';
import classes from './Merchandise.module.css';

import Aux from '../../hoc/Aux/Aux';

class Merchandise extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    Merch Item > Merch Image/Description/Companies Used in Production / Pricing
                </div>
            </Aux>
        );
    }
}

export default Merchandise