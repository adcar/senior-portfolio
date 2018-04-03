import React from 'react'
import { withStyles } from 'material-ui/styles/'
const styles = theme => ({
  img: {
    width: '100%'
  },
  quote: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  }
})
const FeaturedImg = props => (
  <div className={props.classes.wrapper}>
    <img src={props.image} className={props.classes.img} />
    <q className={props.classes.quote}>{props.quote}</q>
  </div>
)

export default withStyles(styles)(FeaturedImg)
