import React from 'react';

import classes from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';


const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Review</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                Merchandise Selections
            </div>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </div>
    );
}

export default checkoutSummary;