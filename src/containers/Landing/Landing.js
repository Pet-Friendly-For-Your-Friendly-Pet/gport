import React, { Component } from 'react';
import classes from './Landing.module.css';

import Aux from '../../hoc/Aux/Aux';
import LandingCanvas from '../../containers/Canvas/CanvasLanding/CanvasLanding';

class Landing extends Component {

    render() {
        return (
            <Aux>
                <div className={classes.Content}>
                    <LandingCanvas />
                    <div>Other components (Youtube ? / Instagram ?)</div>
                </div>
            </Aux>
        );
    }
}

export default Landing;