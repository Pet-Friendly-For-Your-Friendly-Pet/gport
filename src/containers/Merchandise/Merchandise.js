import React, { Component } from 'react';
import classes from './Merchandise.module.css';

import Aux from '../../hoc/Aux/Aux';

class Merchandise extends Component {
    render() {
        return (
            <Aux>
                <div>
                    Merch Item > Merch Image/Description/Pricing
                </div>
            </Aux>
        );
    }
}

export default Merchandise