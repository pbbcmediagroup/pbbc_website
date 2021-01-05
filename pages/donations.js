import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { withStyles } from '@material-ui/styles';
import { loadStripe } from '@stripe/stripe-js';
import Button from '@material-ui/core/Button';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const styles = (theme) => ({
    Root: {
        backgroundColor: 'white',
        height: 2000,
    },
    AppbarSpacer: theme.mixins.toolbar
})

class Donations extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Root}>
                <Navbar />
                <div className={classes.AppbarSpacer} />
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>

        );
    }
}

export default withStyles(styles)(Donations);