import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  pageLabel: {
    backgroundColor: theme.palette.primary.main,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: theme.spacing.unit,
    boxShadow: theme.shadows[1],
    marginBottom: theme.spacing.unit * 2
  }
})

const PageLabel = props => {
  const { classes } = props
  return (
    <div className={props.classes.pageLabel}>
      <Typography
        component="h1"
        variant="display1"
        align="center"
        color="inherit"
      >
        {props.children}
      </Typography>
    </div>
  )
}

PageLabel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PageLabel)
