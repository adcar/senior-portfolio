import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import profilePhoto from '../../img/profilePhoto.jpg'

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  leftSideBar: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '39%'
    },

    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  main: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '61%'
    }
  },
  row: {
    margin: theme.spacing.unit * 2,
    display: 'flex'
  },
  leftCard: {
    marginRight: theme.spacing.unit,
    color: '#fffff'
  },
  rightCard: {
    marginLeft: theme.spacing.unit
  },
  nameHeading: {
    fontSize: '1.5em',
    color: 'white'
  },
  nameSubheading: {
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 100,
    letterSpacing: '0.25em',
    textTransform: 'uppercase'
  },
  profilePhoto: {
    boxShadow: theme.shadows[7],
    height: 200,
    borderRadius: '50%',
    marginBottom: theme.spacing.unit * 3,
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 50,
      width: '100%',
      height: '1rem',
      display: 'block',
      background: 'red'
    }
  },
  sidebarInfo: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  infoHeading: {
    color: 'white',
    textTransform: 'uppercase'
  },
  infoText: {
    color: 'white',
    fontWeight: 100
  },
  list: {
    color: 'white',
    padding: 0,
    margin: 0
  },
  mainList: {
    margin: 0,
    paddingLeft: '1em'
  },
  title: {
    textTransform: 'uppercase',
    color: theme.palette.primary.main
  },
  listItem: {
    verticalAlign: 'center'
  }
})
class Resume extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.leftSideBar}>
          <div className={classes.sidebarInfo}>
            <img
              src={profilePhoto}
              className={classes.profilePhoto}
              alt="Profile Photo"
            />
            <Typography
              variant="display1"
              component="h1"
              align="center"
              className={classes.nameHeading}
            >
              Alexander Cardosi
            </Typography>
            <Typography
              variant="subheading"
              className={classes.nameSubheading}
              align="center"
            >
              Web Developer
            </Typography>
          </div>
          <div className={classes.sidebarInfo}>
            <Typography
              variant="title"
              align="center"
              className={classes.infoHeading}
            >
              Website
            </Typography>
            <Typography align="center" className={classes.infoText}>
              <a
                href="https://alexandercardosi.com"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                https://alexandercardosi.com
              </a>
            </Typography>
          </div>
          <div className={classes.sidebarInfo}>
            <Typography
              variant="title"
              align="center"
              className={classes.infoHeading}
            >
              Phone
            </Typography>
            <Typography align="center" className={classes.infoText}>
              <a
                href="tel:+18025056525"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                (802) 505-6525
              </a>
            </Typography>
          </div>
          <div className={classes.sidebarInfo}>
            <Typography
              variant="title"
              align="center"
              className={classes.infoHeading}
            >
              Email
            </Typography>
            <Typography align="center" className={classes.infoText}>
              <a
                href="mailto:alexanderdcardosi@gmail.com"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                alexanderdcardosi@gmail.com
              </a>
            </Typography>
          </div>
          <div className={classes.sidebarInfo}>
            <Typography
              variant="title"
              align="center"
              className={classes.infoHeading}
            >
              Address
            </Typography>
            <Typography align="center" className={classes.infoText}>
              2127 East Rd, Colchester VT
            </Typography>
          </div>
          <div className={classes.sidebarInfo}>
            <Typography
              variant="title"
              align="center"
              className={classes.infoHeading}
            >
              References
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography className={classes.infoText}>
                  Nicole Tenny
                </Typography>
              </li>
              <li>
                <Typography className={classes.infoText}>
                  Michael Irwin
                </Typography>
              </li>
              <li>
                <Typography className={classes.infoText}>
                  Matt Cronin
                </Typography>
              </li>
              <li>
                <Typography className={classes.infoText}>
                  Lorand Moore
                </Typography>
              </li>
              <li>
                <Typography className={classes.infoText}>Caty Wolfe</Typography>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.row}>
            <Card style={{ flex: 1 }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.title}
                >
                  About Me
                </Typography>
                <Typography>
                  Hi, I'm Alex Cardosi. I have a passion for design and
                  technology. I work well with others and strive to be my
                  greatest self. Also, I like penguins.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.row}>
            <Card className={classes.leftCard}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.title}
                >
                  Skills
                </Typography>
                <ul className={classes.mainList}>
                  <li className={classes.listItem}>
                    <Typography>HTML</Typography>
                  </li>
                  <li>
                    <Typography>CSS</Typography>
                  </li>
                  <li>
                    <Typography>JavaScript</Typography>
                  </li>
                  <li>
                    <Typography>React</Typography>
                  </li>
                  <li>
                    <Typography>SCSS</Typography>
                  </li>
                  <li>
                    <Typography>Bootstrap</Typography>
                  </li>
                  <li>
                    <Typography>jQuery</Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className={classes.rightCard} style={{ flex: 1 }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.title}
                >
                  Interests
                </Typography>
                <ul className={classes.mainList}>
                  <li>
                    <Typography>Free and Open Source Software</Typography>
                  </li>
                  <li>
                    <Typography>React, ES6</Typography>
                  </li>
                  <li>
                    <Typography>Front-end Design</Typography>
                  </li>
                  <li>
                    <Typography>Linux</Typography>
                  </li>
                  <li>
                    <Typography>Penguins</Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className={classes.row}>
            <Card style={{ flex: 1 }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.title}
                >
                  Achievements
                </Typography>
                <ul className={classes.mainList}>
                  <li>
                    <Typography>
                      SkillsUSA National Competition, 1st place
                    </Typography>
                  </li>
                  <li>
                    <Typography>National Technical Honor Society</Typography>
                  </li>
                  <li>
                    <Typography>Certified Web Designer Associate</Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className={classes.row}>
            <Card style={{ flex: 1 }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.title}
                >
                  Experience
                </Typography>
                <Typography>
                  During my education, I've built a large variety of websites,
                  all of which are shown on my{' '}
                  <a href="https://alexandercardosi.com">portfolio</a>.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.row}>
            <Card style={{ flex: 1 }}>
              <CardContent>
                <Typography
                  variant="headline"
                  component="h2"
                  className={classes.title}
                >
                  Education
                </Typography>
                <ul className={classes.mainList}>
                  <li>
                    <Typography>Center for Technology, Essex</Typography>
                  </li>
                  <li>
                    <Typography>Community College of Vermont</Typography>
                  </li>
                  <li>
                    <Typography>Vermont Technical College</Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Resume)
