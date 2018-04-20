import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import heroImg from '../img/heroImage.jpg'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  hero: {
    zIndex: '-2',
    position: 'relative',
    width: '100%',
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
    backgroundImage: `linear-gradient(rgba(0,150,136, 0.9), rgba(0,150,136, 0.9)), url(${heroImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  heroText: {
    color: theme.palette.primary.contrastText
  },
  wrapper: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: theme.spacing.unit * 3
  },
  textBlock: {
    paddingBottom: theme.spacing.unit
  }
})

const IndexPage = props => (
  <div>
    <header className={props.classes.hero}>
      <Typography
        variant="display3"
        component="h1"
        color="inherit"
        className={props.classes.heroText}
      >
        Senior Portfolio
      </Typography>
      <Typography
        variant="display1"
        component="h2"
        className={props.classes.heroText}
      >
        Alexander Cardosi
      </Typography>
    </header>
    <div className={props.classes.wrapper}>
      <Typography
        variant="display1"
        component="h2"
        color="primary"
        gutterBottom
      >
        My Path
      </Typography>
      <Typography component="p" className={props.classes.textBlock}>
        It’s important to choose your own path in life and in academics. I chose
        to take control of my path by finding a program that was the right fit
        for me. Joining the Center for Technology, Essex has led me down a path
        of success; I will soon attend the Vermont Technical College (VTC), and
        my end goal is to become a seasoned web developer with a solid career.
      </Typography>
      <Typography component="p" className={props.classes.textBlock}>
        The decision to join CTE’s Computer Animation and Web Design (CAWD)
        program was an easy one. I always had a passion for technology,
        especially web design/development, so when I first discovered this
        program I knew it’d be the perfect fit for me. CAWD allowed me to focus
        on my own passion, rather than the standard high school studies. My
        teachers and classmates have positively influenced my life by providing
        me with academic and moral support when it comes to any difficulties or
        hardships I might encounter.
      </Typography>
      <Typography component="p" className={props.classes.textBlock}>
        Today, I’m a part of the Computer Animation and Web Design II program
        and find myself enjoying it every day. I would describe myself as a very
        hard worker and put in my full effort when attempting any project or
        assignment I’m given. Reliability and initiative are the most important
        worker traits of mine. Hard work is pointless if you’re not reliable for
        deadlines or lack the initiative to accomplish your task. I find it’s
        important to not only reliably and efficiently turn in assignments, but
        also to take initiative when it comes to leadership roles.
      </Typography>
      <Typography component="p" className={props.classes.textBlock}>
        I’ve already been accepted into VTC and hope to see myself graduate with
        a Software Engineering degree. I will continue my efforts of staying on
        top of assignments and putting in my maximum effort in order to graduate
        with the highest GPA possible. After graduating, I would ideally want to
        get a job as either a web developer or front-end developer of some kind.
        My ideal workplace would be somewhere like GitHub or Google.
      </Typography>
      <Typography component="p" className={props.classes.textBlock}>
        By taking control of my life, I was able to accomplish my goals thus
        far, and will strive to do so in the future. Joining CAWD allowed to to
        better enjoy my academic life. I’m able to focus on my own passion,
        rather than a standard education. Once I graduate and enroll in VTC, I’m
        sure I’ll be right at home once again, as my major aligns perfectly with
        my passion. Choosing your own path is essential; your academic path is
        no exception.
      </Typography>
    </div>
  </div>
)

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IndexPage)
