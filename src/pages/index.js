import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  wrapper: {
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  },
  hero: {
    position: 'absolute',
    left: 0,
    width: '100vw',
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  }
})

const IndexPage = props => (
  <div>
    <header className={props.classes.hero}>
      <h1>Senior Portfolio</h1>
      <h2>By Alexander Cardosi</h2>
    </header>
    <div className={props.classes.wrapper} style={{ marginTop: 500 }}>
      <Typography variant="display2" component="h1" gutterBottom>
        Reflection
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus,
        odio eget semper venenatis, magna ipsum interdum odio, vel eleifend arcu
        risus eget quam. Aenean non purus metus. Donec semper at eros eu varius.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. In
        hendrerit, nibh eget sagittis ultricies, mi sem viverra ante, quis
        accumsan neque metus id leo. Nunc mattis sit amet ligula vel efficitur.
        Morbi finibus eget orci in placerat. Morbi massa odio, ultrices eget
        eros eu, auctor tempus orci. Phasellus sed lacinia lectus. Mauris sit
        amet urna ut ligula vulputate rhoncus vel at neque. Duis pellentesque,
        mauris vel consectetur vestibulum, arcu lacus elementum risus, eget
        tempus risus eros condimentum lectus. In scelerisque varius justo sed
        rutrum. Donec suscipit, mauris in faucibus tristique, eros justo dapibus
        felis, sit amet vulputate erat velit sit amet turpis. Etiam viverra nunc
        euismod arcu dictum, sit amet suscipit nunc tincidunt. Proin quis metus
        et turpis vulputate vestibulum. Phasellus vehicula erat nec risus
        fringilla mollis. Phasellus at eleifend dolor, non feugiat quam. Nulla
        varius ornare vulputate. Donec faucibus pellentesque leo, sed maximus
        ante porttitor quis. Nulla aliquet pharetra ipsum quis condimentum.
        Proin vel finibus lectus. Nulla venenatis dolor aliquam, vestibulum
        massa eget, tempus ligula. Sed vehicula vitae augue ac lobortis. In
        cursus elementum pretium. Duis in metus viverra, efficitur magna vitae,
        laoreet lacus. Cras massa sem, volutpat a ligula rhoncus, convallis
        venenatis ipsum. Nunc vitae neque ut quam sagittis viverra efficitur nec
        nisl. Donec imperdiet est vel lacinia tincidunt. Sed facilisis nisi quis
        consectetur imperdiet. Maecenas lacus leo, ornare vel porta nec, aliquam
        eu urna. Sed faucibus lobortis dolor quis finibus. Ut non neque vel
        mauris elementum sodales. Donec porta, ex eget elementum aliquet, augue
        massa ultricies diam, id efficitur purus dui quis eros. Duis at orci in
        ligula ultrices congue. Proin cursus faucibus mi id auctor. Suspendisse
        tristique eros bibendum semper consectetur. Integer faucibus lectus ut
        sollicitudin tristique. Fusce ullamcorper nulla ante, vestibulum rhoncus
        risus aliquet ut. Quisque at velit rutrum, blandit orci nec, hendrerit
        erat. Sed vel leo ac sem congue feugiat quis quis quam. Donec tristique
        metus id tellus tempus, vitae sodales felis gravida. Nullam mauris ante,
        aliquet rhoncus felis sit amet, elementum bibendum purus. Suspendisse
        nec auctor tellus. Vivamus a imperdiet mi. Integer at ornare erat, ac
        hendrerit neque. Sed blandit sapien sit amet metus cursus, vitae posuere
        dolor bibendum. Donec felis nulla, aliquam sit amet nisl sit amet,
        posuere commodo lacus. Phasellus volutpat ornare aliquam. In hac
        habitasse platea dictumst.
      </Typography>
      <Typography>
        Also, check out my <a href="https://alexcardosi.me/">portfolio</a>
      </Typography>
    </div>
  </div>
)

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IndexPage)
