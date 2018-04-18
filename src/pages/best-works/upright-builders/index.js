import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Link from 'gatsby-link'
import { uprightBuilders as thumbnail } from '../../../img'
import FeaturedImg from '../../../components/FeaturedImg/'

const styles = theme => ({
  title: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  textBlock: {
    paddingBottom: theme.spacing.unit
  }
})
const UprightBuilders = props => (
  <div>
    <Typography
      variant="display2"
      component="h1"
      align="center"
      className={props.classes.title}
      gutterBottom
    >
      Upright Builders
    </Typography>
    <FeaturedImg
      image={thumbnail}
      quote="Believe you can and you’re halfway there"
      author="Theodore Roosevelt"
    />
    <Typography component="p" className={props.classes.textBlock}>
      Michael Irwin is starting his own construction business, called{' '}
      <a href="http://uprightbuildersvt.com">Upright Builders</a>. Michael
      decided to approach our Computer Animation and Web Design (CAWD) program
      and ask us if we could help with his website. Alex Goodman and I happily
      agreed and began working on his website and logo. Alex was in charge of
      graphic design aspects, whereas I worked on the more technical side of
      things, by building a Wordpress theme.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      This website is powered by a program called Wordpress, which allows easy
      editing of pages through a interface comparable to Google Docs. This
      allows the client to add their own content, without having any knowledge
      of programming or web design. I had never used Wordpress before, but I was
      enthused to begin learning the software. Behind the scenes, I used HTML,
      CSS, JavaScript, and PHP to design the theme. I began thinking of some
      different site ideas, and asked the client for his input. After we had
      decided a general site design, I started out with a base HTML5 theme and
      modified everything until it fit the client’s needs perfectly. Throughout
      this process, I made an abundance of revisions. Anytime the client wanted
      to change something I would be sure to meet his needs. For example, the
      client recently asked for me to add a slideshow, and a couple days later I
      gave him a fully-functional carousel with Wordpress integration (for
      allowing the swapping of images).
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      The Upright Builders website represents how I can adapt to new situations
      quickly and efficiently. This project is also a great example of real-life
      client work. Above all, I am pleased with how the site came out and enjoy
      the overall design. Throughout this project, I learned the ins and outs of
      Wordpress, as well as how to talk to clients and ask for their input. I
      would show the client some design ideas, and ask for his input, rather
      than building something that only I enjoyed.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      If I were to do this project over, I would probably use something other
      than Wordpress. It’s a great tool, but it can be difficult to work with at
      times. I much prefer JavaScript over PHP so I’d be inclined to use
      something like GatsbyJS + Netlify CMS + React. This stack would still
      allow for an easy-to-use interface for the client, but allow me to code
      using JavaScript and React.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      Overall, I’m very happy with this project. Believing in myself helped me
      through the journey, and fulfilling the clients need came easy with my
      prior coding experience. I found it was important to keep believing in
      myself, even when I was struggling with the technical details of
      Wordpress. This project gave me real world experience which will help me
      later in life when it comes to talking with clients and fulfilling
      requests.
    </Typography>
  </div>
)

UprightBuilders.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(UprightBuilders)
