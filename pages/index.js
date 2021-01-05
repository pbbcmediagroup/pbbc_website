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
import Footer from '../components/Footer';
import PayPalDonationButton from '../components/PayPalDonationButton';
import DonationsSection from '../components/DonationsSection';

const styles = (theme) => ({
    Root: {
        backgroundColor: 'white',
        height: 2000,
        background: 'url(/pbbc.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
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
        height: 1000,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
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
					</Box>
                   	<Box>
						<Announcements />	
					</Box>
                    <Box>
                        <DonationsSection />
                        {/* <Container>
                            <PayPalDonationButton />
                        </Container> */}
					</Box>
                    <Box>
                        <Map />
                    </Box>
                    <Footer />
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
