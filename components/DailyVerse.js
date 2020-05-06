import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const styles = () => ({
    Box: {
        paddingTop: 10,
        paddingLeft: 25,
        paddingBottom: 5
    },
    Verse: {
        paddingLeft: 25,
        paddingBottom: 25
    }
});

class DailyVerse extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper>
                    <Box className={classes.Box}>
                        <h1>Daily Bible Verse</h1>
                    </Box>
                    <Box className={classes.Verse}>
                    This is what the LORD says: “Cursed is the one who trusts in man, who draws strength from mere flesh and whose heart turns away from the LORD.
                    </Box>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(DailyVerse);