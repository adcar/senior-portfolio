import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  wrapper: {
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  },
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
})

const ErrorPage = props => (
  <div className={props.classes.wrapper}>
    <Typography component="h1" variant="display2" align="center" gutterBottom>
      404 Not Found :(
    </Typography>
    <Typography>
      Go back <Link to="/">Home.</Link>
    </Typography>
  </div>
)

ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ErrorPage)
