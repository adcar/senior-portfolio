import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Link from 'gatsby-link'
const styles = theme => ({
  media: {
    height: 200
  }
})

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <Card className={props.className}>
        <CardMedia
          className={classes.media}
          image={props.media}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  media: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
