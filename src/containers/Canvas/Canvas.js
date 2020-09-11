import React, { Component } from 'react';
import classes from './Canvas.module.css';

import Aux from '../../hoc/Aux/Aux';
import p5 from 'p5'

class Landing extends Component {

    constructor(props) {
        super(props)

        // p5 instance mode requires a reference on the DOM to mount the sketch
        // use react's createRef function to give p5 a reference
        this.myRef = React.createRef()

        let xvals = [];
        let yvals = [];
        let bvals = [];
    }

    // This uses p5's instance mode for sketch creation and namespacing
    Sketch = (p) => {

        let totalPts = 300;
        let steps = totalPts + 1;

        // Native p5 functions work as they would normally but prefixed with 
        // a p5 object "p"
        p.setup = () => {
            let cnv = p.createCanvas(p.windowWidth, p.windowHeight);

            cnv.style('display', 'block');
            cnv.style('position', 'absolute');
            cnv.stroke(255);
            p.frameRate(60);

        }

        p.draw = () => {
            p.background(0);
            let rand = 0;
            for (let i = 1; i < steps; i++) {
                p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand));
                rand += p.random(-5, 5);
            }
        }

        // auto resize window
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
    }

    // create a new p5 object on component mount, feed it 
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