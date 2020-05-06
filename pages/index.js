import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Logobar from '../components/Logobar';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import DailyVerse from '../components/DailyVerse';
import BoxedRouter from '../components/BoxedRouter';
import Map from '../components/Map';

const styles = (theme) => ({
    Root: {
        backgroundColor: 'white',
        height: 2000,
    },
    
    DV_Container: {
        padding: 20,
    },

    Box: {
        background: 'url(/pbbc_group.jpg)',
        height: 800,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    AppbarSpacer: theme.mixins.toolbar
});

class Home extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Root}>
                <Navbar />
                <div className={classes.AppbarSpacer} />
                <Logobar />
                <main className={classes.Root}>
                    <Box className={classes.Box}>
                        {/* <Container className={classes.DV_Container}> 
                            <DailyVerse />
                        </Container> */}
                    </Box>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <BoxedRouter title="Live Stream"/>
                            </Grid>
                            <Grid item xs={6}>
                                <BoxedRouter title="Donations"/>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box>
                        <Map />
                    </Box>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Home);