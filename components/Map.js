import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    Box: {
        height: 55,
        backgroundColor: 'black',
        color: 'white'
    }
});

class Map extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Box className={classes.Box}>
                    <Grid container justify = "center">
                        <Typography variant="h3" component="h2">
                            Visit Us
                        </Typography>
                    </Grid>
                </Box>
                <iframe width="100%" height="450" frameborder="0" 
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAyJ-qBrGxokRUytLykUGqBU&key=AIzaSyCKxu4AbZaS203xzexnKpEMI1M_k_xuSXM" 
                    allowfullscreen>
                </iframe>
            </div>
        );
    }
}

export default withStyles(styles)(Map);