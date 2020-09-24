import React, { Component } from 'react';
import classes from './Landing.module.css';

import Aux from '../../hoc/Aux/Aux';
import Canvas from '../Canvas/Canvas';

class Landing extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    <Canvas />
                    <div>Other components (Gunsounds Youtube ? / Instagram ?)</div>

                </div>
            </Aux>
        );
    }
}

export default Landing;