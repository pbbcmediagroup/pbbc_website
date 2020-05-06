import React from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    Root: {
        flexGrow: 1
    },

    Navbar: {
        height: 65,
        backgroundColor: 'white',
        zIndex: theme.zIndex.drawer + 2,
        alignItems: 'center'
    },

    Box: {
        display: 'flex'
    }
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const MediaHandler = () => {
    Router.push({
        pathname: '/media'
    })
  }
 
function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.Root}>
            <ElevationScroll {...props}>
            <AppBar className={classes.Navbar}>
                <Toolbar>
                    <Button color="primary" onClick={MediaHandler}> Welcome </Button>
                    <Button color="primary" onClick={MediaHandler}> Media </Button>
                    <Button color="primary" onClick={MediaHandler}> Donate </Button>
                    <Button color="primary" onClick={MediaHandler}> Contact </Button>
                </Toolbar>
            </AppBar>
            </ElevationScroll>
        </div>
    );
}

export default Navbar;