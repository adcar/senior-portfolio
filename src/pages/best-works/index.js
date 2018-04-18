import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Card from '../../components/Card'
import PageLabel from '../../components/PageLabel'
import { bestWorks } from '../../img/'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const style = theme => ({
  cardContainer: {
    flexFlow: 'row wrap',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    width: 290,
    margin: theme.spacing.unit
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
      <PageLabel>Best Works</PageLabel>
      <div className={props.classes.cardContainer}>{works}</div>
    </div>
  )
}

BestWorks.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(style)(BestWorks)
