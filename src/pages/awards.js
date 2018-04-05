import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography'
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import nths from '../img/nths.jpg'
import vermontSkills from '../img/skillsVermont.jpg'
import nationalSkills from '../img/skillsChampion.jpg'
import nthsCert from '../img/nthsCert.jpg'
import honorsCert from '../img/honorsCert.jpg'
import skillsCert from '../img/skillsCert.jpg'
import Lightbox from 'react-images'

const styles = theme => ({
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit,
    width: 290
  },
  media: {
    minHeight: 200
  },
  wrapper: {
    marginBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  }
})

const awards = [
  {
    caption: 'SkillsUSA Vermont',
    src: vermontSkills
  },
  {
    caption: 'SkillsUSA Nationals',
    src: nationalSkills
  },
  {
    caption: 'National Technical Honor Society',
    src: nths
  }
]
const certs = [
  {
    caption: 'NTHS Certificate',
    src: nthsCert
  },
  {
    caption: 'High Honors Certificate',
    src: honorsCert
  },
  {
    caption: 'SkillsUSA Certificate',
    src: skillsCert
  }
]

class Awards extends Component {
  constructor() {
    super()
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index, e) {
    e.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious() {
    this.setState({ currentImage: this.state.currentImage - 1 })
  }
  gotoNext() {
    this.setState({ currentImage: this.state.currentImage + 1 })
  }

  gotoImage(index) {
    this.setState({
      currentImage: index
    })
  }

  handleClickImage() {}
  openLightbox(index, e) {
    e.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }
  render() {
    const { classes } = this.props

    const awardCards = awards.map((image, i) => (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image.src}
          title={image.caption}
        />
        <CardContent style={{ flex: 1 }}>
          <Typography variant="headline" component="h2">
            {image.caption}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={e => this.openLightbox(i, e)}
          >
            View
          </Button>
        </CardActions>
      </Card>
    ))

    const certCards = certs.map((image, i) => (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image.src}
          title={image.caption}
        />
        <CardContent style={{ flex: 1 }}>
          <Typography variant="headline" component="h2">
            {image.caption}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={e => this.openLightbox(i + 3, e)}
          >
            View
          </Button>
        </CardActions>
      </Card>
    ))
    return (
      <div>
        <Lightbox
          images={[...awards, ...certs]}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          currentImage={this.state.currentImage}
        />
        <div className={classes.wrapper}>
          <Typography
            component="h1"
            variant="display2"
            align="center"
            gutterBottom
          >
            Awards
          </Typography>
          <div className={classes.cardContainer}>{awardCards}</div>
        </div>
        <div className={classes.wrappr}>
          <Typography
            component="h1"
            variant="display2"
            align="center"
            gutterBottom
          >
            Certificates
          </Typography>
          <div className={classes.cardContainer}>{certCards}</div>
        </div>
      </div>
    )
  }
}

Awards.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Awards)
