import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DailyVerse from '../components/DailyVerse';
import BoxedRouter from '../components/BoxedRouter';
import Map from '../components/Map';
import Announcements from '../components/Announcements';

const styles = (theme) => ({
    Root: {
        backgroundColor: 'white',
        height: 2000,
    },
    
    DV_Container: {
        padding: 20,
    },

	Title_Container: {
		color: 'white',
		paddingTop: 200,
		fontWeight: "fontWeightBold"
	},

    Box: {
        background: 'url(/pbbc.png)',
        height: 600,
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
                <main className={classes.Root}>
                    <Box className={classes.Box} fontWeight="fontWeightBold">
						<Container className={classes.Title_Container}>
							<Typography variant="h2" align="center">
								
							</Typography>
						</Container>
					</Box>
                   	<Box>
						<Announcements />	
					</Box>
					<Container>
                        <Grid container spacing={2}>
                            {/* <Grid item xs={6}>
                                <BoxedRouter title="Live Stream"/>
                            </Grid>
                            <Grid item xs={6}>
                                <BoxedRouter title="Donations"/>
                            </Grid> */}
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
