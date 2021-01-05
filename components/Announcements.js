import React, { Component } from 'react';
import { withStyles} from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const styles = () => ({
	Container: {
		height: 500,
		paddingTop: 50,
		textAlign: 'center'
	},

	Box: {
		paddingTop: 20,
		paddingBottom: 50
	}

});

class Announcements extends Component {

	render() {
		const { classes } = this.props;
		return (
			<div> 
				<Container className={classes.Container}>
					<Divider />
					<Box className={classes.Box}>
						<Typography variant="h3" color="primary"> 
							Online Service
						</Typography>
						
						<Box className={classes.Box}>
							<Typography variant="h4" color="secondary">
								Live @ 2:00PM EST
							</Typography>
						</Box>

						<Box>
							<Button variant='outlined'>
								View Live Streams
							</Button>
						</Box>
					</Box>
				</Container>
			</div>
		);
	}

}


export default withStyles(styles)(Announcements);
                      
