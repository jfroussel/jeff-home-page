import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = {
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#f8f9fa',
        color: 'white',
        textAlign: 'center'
    }
}

const Footer = (props) => {
    const { classes } = props
    console.log('props', props)
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
            </Typography>
        </footer>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)