import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import StackCard from './StackCard'
import stack from '../../constants'


const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: '#c7c7c775'
    }
})

const Content = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                {
                    stack.map((s) => {
                        return (
                            <Grid item xs>
                                <StackCard title={s.title} description={s.description} imageUrl={s.imageUrl} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
