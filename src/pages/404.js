import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  marginBottom: {
    marginBottom: theme.spacing.unit * 3
  }
})

const ErrorPage = props => (
  <div>
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
