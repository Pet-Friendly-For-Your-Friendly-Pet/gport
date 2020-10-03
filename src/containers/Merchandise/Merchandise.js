import React, { Component } from 'react';
import classes from './Merchandise.module.css';

import Aux from '../../hoc/Aux/Aux';
import MerchSection from './MerchSection/MerchSection';

class Merchandise extends Component {


    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    <MerchSection title="Buttons" />
                    <MerchSection title="Music" />
                    <MerchSection title="Stickers" />
                </div>
            </Aux>
        );
    }
}

export default Merchandise