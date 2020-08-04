import React from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Tab from "@material-ui/core/Tab";
import { Tabs } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Root: {
        flexGrow: 1
    },

    Navbar: {
        height: 65,
        backgroundColor: 'white',
        zIndex: theme.zIndex.drawer + 2
    },

    Box: {
        display: 'flex'
    },

    Logo: {
        maxWidth: '150%',
        maxHeight: '250%',
    },

    SmallIcons: {
        maxWidth: '20%',
        maxHeight: '50%'
    },

    MainLogo: {
        marginLeft: -12
    },

    RightToolbar: {
        marginLeft: 'auto',
        marginRight: -12
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

const WelcomeHandler = () => {
    Router.push({
        pathname: '/'
    })
}

const handleFacebook = () => {
    window.location.href='https://facebook.com/pbbc.church'
}
 
function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.Root}>
            <ElevationScroll {...props}>
            <AppBar className={classes.Navbar}>
                <Toolbar>
                    <IconButton classeName={classes.MainLogo}>
                        <img src={'../pbbcLogoV2.png'} className={classes.Logo} alt='logo'/>
                    </IconButton>
                    <section className={classes.RightToolbar}>
                        <Button color='primary' onClick={WelcomeHandler}> Welcome </Button> 
                        <Button color='primary' onClick={MediaHandler}> Media </Button>
                        <IconButton>
                            <img src={'../fbook.png'} className={classes.SmallIcons} alt='fbook' onClick={handleFacebook}/>
                        </IconButton>
                    </section>
                    {/*<Grid justify={"space-between"} container>
                        <Grid xs={1} item>
                            <img src={'../pbbcLogoV2.png'} className={classes.Logo} alt='logo'/>
                        </Grid>
                        <Grid xs={4} item>
                            <Grid container justify={"center"}>
                                <Tabs aria-label="Navigation Tabs">
                                    <Tab label={"page 1"} />
                                    <Tab label={"page 2"} />
                                </Tabs>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid> */}
                    {/* <Button color="primary" onClick={MediaHandler}> Welcome </Button> */}
                    {/* <Button color="primary" onClick={MediaHandler}> Media </Button>
                    <Button color="primary" onClick={MediaHandler}> Donate </Button>
                    <Button color="primary" onClick={MediaHandler}> Contact </Button> */}
                </Toolbar>
            </AppBar>
            </ElevationScroll>
        </div>
    );
}

export default Navbar;