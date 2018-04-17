import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Link from 'gatsby-link'
import Heart from 'material-ui-icons/Favorite'
const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: 50,
    minHeight: 50,
    display: 'flex',
    jusitfyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  footerText: {
    color: 'white',
    width: '100%'
  }
})

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div className={classes.footer}>
      <Typography
        align="center"
        className={classes.footerText}
        component="span"
      >
        Made with <Heart style={{ height: '0.8rem' }} />
      </Typography>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)