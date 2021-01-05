import React, { Component } from 'react';
import { withStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import PayPalDonationButton from './PayPalDonationButton';

const styles = () => ({
	Container: {
		height: 500,
		paddingTop: 10,
		textAlign: 'center'
	},

	Box: {
		paddingTop: 1,
        paddingBottom: 50
	}

});

class DonationsSection extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div> 
            <Container className={classes.Container}>
                <Box className={classes.Box}>
                    <Typography variant="h3" color="primary"> 
                        Donations
                    </Typography>
                    
                    <Box className={classes.Box}>
                        <Typography variant="h6" color="secondary">
                            Accpeting Donations through PayPal
                        </Typography>
                    </Box>

                    <Box>
                        <Container>
                            <PayPalDonationButton />
                        </Container>
                    </Box>
                </Box>
                <Divider />
            </Container>
        </div>
        );
    }
}

export default withStyles(styles)(DonationsSection);