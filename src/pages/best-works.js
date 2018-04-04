import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Card from '../components/Card'
import portfolioFromScratch from '../img/portfolio-from-scratch.png'
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
  wrapper: {
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  },
  card: {
    margin: theme.spacing.unit,
    width: 290
  }
})

const BestWorks = props => (
  <div className={props.classes.wrapper}>
    <Typography component="h1" variant="display2" align="center" gutterBottom>
      Best Works
    </Typography>
    <div className={props.classes.cardContainer}>
      <Card
        className={props.classes.card}
        media={portfolioFromScratch}
        description="Lorem ipsum dolor sit amet"
        title="Portfolio from Scratch"
        link="/best-works/portfolio-from-scratch"
      />
      <Card
        className={props.classes.card}
        media={portfolioFromScratch}
        description="Lorem ipsum dolor sit amet"
        title="Upright Builders"
        link="/best-works/portfolio-from-scratch"
      />
      <Card
        className={props.classes.card}
        media={portfolioFromScratch}
        description="Lorem ipsum dolor sit amet"
        title="Apollo"
        link="/best-works/portfolio-from-scratch"
      />
    </div>
  </div>
)

BestWorks.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(style)(BestWorks)
