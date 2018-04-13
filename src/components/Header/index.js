import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import SwipeableDrawer from 'material-ui/SwipeableDrawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'

import Typography from 'material-ui/Typography'
import List from 'material-ui/List'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import MenuIcon from 'material-ui-icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
    height: '100%'
  },
  teal: {
    color: theme.palette.primary.main
  },
  navIconHide: {
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  links: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline'
    }
  },
  list: {
    paddingTop: 0
  }
})

class Header extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      anchorEl: {
        id: ''
      }
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
  }
  handleDrawerToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { classes, theme } = this.props
    const { anchorEl, isOpen } = this.state
    const drawer = (
      <div>
        <div className={classes.toolbar} />

        <List classes={{ padding: classes.list }}>
          <div>
            <ListItem>
              <Typography variant="title">Senior Portfolio</Typography>
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={this.handleDrawerToggle}
              to="/resume"
              component={Link}
            >
              <ListItemText primary="Resume" />
            </ListItem>
            <ListItem
              button
              onClick={this.handleDrawerToggle}
              component={Link}
              to="/best-works"
            >
              <ListItemText primary="Best Works" />
            </ListItem>
            <ListItem
              button
              onClick={this.handleDrawerToggle}
              component={Link}
              to="/letters-of-recommendation"
            >
              <ListItemText primary="Recommendations" />
            </ListItem>
            <ListItem
              button
              onClick={this.handleDrawerToggle}
              component={Link}
              to="/community-service"
            >
              <ListItemText primary="Community Service" />
            </ListItem>
            <ListItem
              button
              onClick={this.handleDrawerToggle}
              component={Link}
              to="/honors-and-awards"
            >
              <ListItemText primary="Awards" />
            </ListItem>
          </div>
        </List>
      </div>
    )
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" color="inherit">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon className={classes.teal} />
            </IconButton>
            <Link to="/" className={[classes.link, classes.flex].join(' ')}>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Senior Portfolio
              </Typography>
            </Link>
            <div className={classes.links}>
              <Button
                to="/resume"
                color="inherit"
                component={Link}
                className={classes.teal}
              >
                Resume
              </Button>
              <Button
                color="inherit"
                to="/best-works"
                component={Link}
                className={classes.teal}
              >
                Best Works
              </Button>
              <Button
                color="inherit"
                to="/letters-of-recommendation"
                component={Link}
                className={classes.teal}
              >
                Recommendations
              </Button>
              <Button
                color="inherit"
                to="/community-service"
                component={Link}
                className={classes.teal}
              >
                Community Service
              </Button>
              <Button
                color="inherit"
                to="/honors-and-awards"
                component={Link}
                className={classes.teal}
              >
                Awards
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <SwipeableDrawer
            variant="temporary"
            anchor={'left'}
            open={isOpen}
            onClose={this.handleDrawerToggle}
            onOpen={this.handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={
              { keepMounted: true } // Better open performance on mobile.
            }
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </div>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
