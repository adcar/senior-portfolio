import React from 'react'
import Link from 'gatsby-link'
import resume from '../img/resume.svg'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  wrapper: {
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  }
})
const Resume = props => (
  <div className={props.classes.wrapper}>
    <Typography component="h1" variant="display2" align="center" gutterBottom>
      Resume and Cover Letter
    </Typography>
    <Typography component="h2" variant="display1" align="center" gutterBottom>
      Resume{' '}
    </Typography>
    <img src={resume} style={{ marginBottom: '1em' }} />
    <Typography component="h2" variant="display1" align="center" gutterBottom>
      Cover Letter
    </Typography>
    <Card>
      <CardContent>
        <Typography>2127 East Road Colchester, Vermont 05446</Typography>
        <br />
        <Typography>December 21, 2017</Typography>
        <br />
        <Typography>
          Recruiter, Jason Gordon Google 1600 Amphitheatre Pkwy Mountain View,
          CA 94043
        </Typography>
        <br />
        <Typography>Dear Recruiter, Jason Gordon:</Typography>
        <Typography>
          My experience with web design and development makes me an ideal
          candidate for your Front End Software Engineer position. Your company
          stays on the edge of innovation, with constant improvements for both
          developers and the world in general. I hope that with my skill set and
          motivation, you will consider me for this position. I am well rounded
          in HTML, CSS, and JS. AngularJS is one of my strongest skills, and I
          will utilize this in the work environment. I am constantly eager to
          learn more and am deeply passionate about both web design and
          development. I look forward to contacting you in a few days. If you
          have any questions before then, feel free to contact me at
          acardosi@vt.ewsd.org.
        </Typography>
        <br />
        <Typography>Thank you,</Typography>
        <Typography>Alexander Cardosi </Typography>
      </CardContent>
    </Card>
  </div>
)

export default withStyles(styles)(Resume)
