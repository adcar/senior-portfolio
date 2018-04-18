import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Link from 'gatsby-link'
import { apollo as thumbnail } from '../../../img'
import FeaturedImg from '../../../components/FeaturedImg/'
import PageLabel from '../../../components/PageLabel'

const styles = theme => ({
  title: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  textBlock: {
    paddingBottom: theme.spacing.unit
  }
})
const Apollo = props => (
  <div>
    <PageLabel>Apollo</PageLabel>

    <FeaturedImg
      image={thumbnail}
      quote="If people take anything from my music, it should be motivation to know that anything is possible as long as you keep working at it and don't back down."
      author="Marshall Mathers"
    />
    <Typography component="p" className={props.classes.textBlock}>
      Music is a large part of my life, and I needed a simple platform to be
      able to listen to whatever song, album, or playlist I wanted to. There are
      some services out there already, like Spotify, Google Play Music, Pandora,
      or even Apple Music. However, these services have rather strict
      limitations. For example, Spotify doesn’t even allow playing a specific
      song on mobile: instead, you need to play the entire album in shuffle mode
      and hope your song shows up. This was inconsistent with Spotify’s desktop
      version which lets you pick and choose songs. I searched around, and the
      only easy way to listen to the specific song I chose was with YouTube;
      however, the interface wasn’t really designed for music and I needed to
      pay for a YouTube Red subscription just to be able to listen to music with
      my phone’s screen off. Thus, I decided to create my own music interface,
      one that acts like Spotify but retrieves songs from YouTube. I named it{' '}
      <a href="https://apollomusic.tk/">Apollo</a>, after the Greek god of
      music. This website can be run on the desktop or phone and provides an
      easy-to-use interface for accessing your favorite songs.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      In order to create this interface, I needed a few different things. For
      one, I needed an Application Programming Interface (API) to let me access
      song names, artists, cover art, and other metadata. I decided to use the
      Spotify API which has a huge library of over four million songs and met
      all my criteria. Then, I needed to retrieve the source of the song through
      YouTube. I decided to build my own API using Node.js which searches
      YouTube for “&lt;Song Name&gt; by &lt;Artist Name&gt; audio” and scrapes
      the source of the first result then sends it to the client. After I had
      met these needs, I could begin designing the interface itself. I decided
      to use the JavaScript library React, along with Material-UI theming. React
      makes developing web applications easier, and vastly improves the
      performance of said web apps. Material-UI provides some premade React
      Components that implement Google’s Material Design Guidelines.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      The end result of this project was not only something I was proud of, but
      something I could use every day. I am most proud of this project because
      of my use of React and Material-UI. These two technologies are commonly
      used together in the open source and web development community. I wanted
      to learn these tools to not only better myself as a web developer, but
      also allow me to better contribute to the open source community. I feel I
      have learned React well and can now confidently work on pre-existing open
      source projects, or even start my own without worrying about whether the
      code is too messy or doesn’t follow the usual frameworks used. Learning
      React itself isn’t such a difficult task, however, it’s easy to run into
      problems when developing an application. Diagnosing these problems is what
      really allows to better understand the technology (compared to just
      reading a book on it, without actually engaging).
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      Building Apollo helped me understand and utilize various APIs, React, and
      Material-UI. I can confidently say I’ve created a functional and useful
      web application in React. I can show this off to friends, family, and (of
      course) use it myself. Once I had the strong motivation and roadmap to
      creating this application, it was only a matter of the finer details of
      programming in React. Having this knowledge of React opens me up to many
      job possibilities, as well as the ability to better contribute to the open
      source community.
    </Typography>
  </div>
)

Apollo.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Apollo)
