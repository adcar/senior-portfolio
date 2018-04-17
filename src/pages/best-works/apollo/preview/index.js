import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Link from 'gatsby-link'

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  title: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  textBlock: {
    paddingBottom: theme.spacing.unit
  },
  iframe: {
    height: '100%',
    width: '100%',
    border: 'none'
  }
})
const Preview = props => (
  <div className={props.classes.root}>
    <iframe src="https://apollomusic.tk" className={props.classes.iframe} />
  </div>
)

Preview.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Preview)
