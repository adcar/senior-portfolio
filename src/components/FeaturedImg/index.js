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
    <span className={props.classes.quote}>
      <q>{props.quote}</q> - {props.author}
    </span>
  </div>
)

export default withStyles(styles)(FeaturedImg)
