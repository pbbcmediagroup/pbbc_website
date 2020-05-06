import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
    Bar: {
        position: 'relative',
        height: 65,
        background: '#177fff',
        color: 'white',
        zIndex: theme.zIndex.drawer + 1,
    },
    Box: {
        paddingLeft: 25,
    }
});

class Logobar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.Bar}>
                    <Toolbar>
                        <Grid container justify = "center">
                            <h1> Philadelphia Burmese Baptist Church </h1>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Logobar);