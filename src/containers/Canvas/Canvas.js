import React, { Component } from 'react';
import classes from './Canvas.module.css';

import Aux from '../../hoc/Aux/Aux';
import p5 from 'p5'

class Landing extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        p.setup = () => {
            let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
            cnv.style('display', 'block');
            cnv.style('position', 'absolute');
        }

        p.draw = () => {
            p.background(0);
            p.circle(p.width / 2, p.height / 2, 150);
        }

        // auto resize window
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <Aux>
                <div className={classes.CanvasContainer}>
                    <div ref={this.myRef}>

                    </div>
                </div>
            </Aux>
        )
    }
}

export default Landing;