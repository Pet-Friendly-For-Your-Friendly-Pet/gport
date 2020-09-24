import React, { Component } from 'react';
import classes from './Design.module.css';

// re-use modal for hi-res image display
import Modal from '../../components/UI/Modal/Modal';


class Design extends Component {
    render() {
        return (
            <div className={classes.Content}>
                Grid Portfolio + modal/hi-res image viewer + Canvas?
            </div>
        );
    }
}

export default Design;