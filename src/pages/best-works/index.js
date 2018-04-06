import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Card from '../../components/Card'
import { bestWorks } from '../../img/'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const style = theme => ({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    margin: theme.spacing.unit,
    width: 290
  }
})

const BestWorks = props => {
  const works = bestWorks.map((work, index) => (
    <Card
      key={index}
      className={props.classes.card}
      media={work.src}
      title={work.name}
      link={`/best-works/${work.name.toLowerCase().replace(/\ /g, '-')}`}
    />
  ))

  return (
    <div>
      <Typography component="h1" variant="display2" align="center" gutterBottom>
        Best Works
      </Typography>
      <div className={props.classes.cardContainer}>{works}</div>
    </div>
  )
}

BestWorks.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(style)(BestWorks)
