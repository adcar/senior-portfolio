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
    console.log('toggled')
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
        <List>
          <div>
            <ListItem onClick={this.handleDrawerToggle}>
              <Link to="/resume" className={classes.link}>
                <ListItemText primary="Resume" />
              </Link>
            </ListItem>
            <ListItem button onClick={this.handleDrawerToggle}>
              <Link to="/best-works" className={classes.link}>
                <ListItemText primary="Best Works" />
              </Link>
            </ListItem>
            <ListItem button onClick={this.handleDrawerToggle}>
              <Link to="/letters-of-recommendation" className={classes.link}>
                <ListItemText primary="Recommendations" />
              </Link>
            </ListItem>
            <ListItem button onClick={this.handleDrawerToggle}>
              <Link to="/community-service" className={classes.link}>
                <ListItemText primary="Community Service" />
              </Link>
            </ListItem>
            <ListItem button onClick={this.handleDrawerToggle}>
              <Link to="/awards" className={classes.link}>
                <ListItemText primary="Awards" />
              </Link>
            </ListItem>
          </div>
        </List>
      </div>
    )
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
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
              <Button color="inherit">
                <Link to="/resume" className={classes.link}>
                  Resume
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/best-works" className={classes.link}>
                  Best Works
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/letters-of-recommendation" className={classes.link}>
                  Recommendations
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/community-service" className={classes.link}>
                  Community Service
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/awards" className={classes.link}>
                  Awards
                </Link>
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
