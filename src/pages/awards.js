import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import nths from '../img/nths.jpg'
import vermontSkills from '../img/skillsVermont.jpg'
import nationalSkills from '../img/skillsChampion.jpg'

const styles = theme => ({
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
  },
  media: {
    minHeight: 200
  },
  wrapper: {
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  }
})

const Awards = props => (
  <div className={props.classes.wrapper}>
    <Typography component="h1" variant="display2" align="center" gutterBottom>
      Awards
    </Typography>
    <div className={props.classes.cardContainer}>
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.media}
          image={nths}
          title="National Technical Honor Society"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            National Technical Honor Society
          </Typography>
        </CardContent>
      </Card>
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.media}
          image={nationalSkills}
          title="National Technical Honor Society"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            SkillsUSA Vermont
          </Typography>
        </CardContent>
      </Card>
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.media}
          image={vermontSkills}
          title="National Technical Honor Society"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            SkillsUSA Nationals
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
)

Awards.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Awards)
