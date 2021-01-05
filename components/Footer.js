import React, { Component } from 'react';
import { withStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    Footer: {
        backgorundColor: 'black',
        width: '100%'
    },

    Box: {
        backgroundColor: 'black',
        height: '200px'
    },

    Container: {
        textAlign: 'center',
        color: 'white',
        paddingTop: 50
    }
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.Footer}>
                <Box className={classes.Box}>
                    <Container className={classes.Container}>
                        <Typography variant="h5" color="secondary"> 
							Contact Info
						</Typography>
                        <Typography variant="subtitle1" color="secondary"> 
							pbbcmediagroup@gmail.com
						</Typography>
                    </Container>
                </Box>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer);