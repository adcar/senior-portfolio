import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import portfolioFromScratch from '../img/portfolio-from-scratch.png'
import { withStyles } from 'material-ui/styles'

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

const BestWorks = props => (
  <div>
    <h1>My best works!</h1>
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

export default withStyles(style)(BestWorks)
