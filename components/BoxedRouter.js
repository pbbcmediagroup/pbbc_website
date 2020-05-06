import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const styles = () => ({
    Root: {
        padding: 25
    },

    Paper: {
        height: 150,
        background: 'linear-gradient(180deg, rgba(4,188,255,1) 0%, rgba(97,46,170,1) 100%)',
        textAlign: 'center',
        padding: 10,
        color: 'white'
    },

    Button: {
        color: 'inherit'
    }
});

class BoxedRouter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const title = this.props.title;
        return (
            <div className={classes.Root}>
                <Container> 
                    <Paper className={classes.Paper}>
                        <Button className={classes.Button}>{title}</Button>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(BoxedRouter);