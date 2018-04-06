import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Link from 'gatsby-link'
import thumbnail from '../../img/uprightBuilders.png'
import FeaturedImg from '../../components/FeaturedImg/'

const styles = theme => ({
  title: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  textBlock: {
    paddingBottom: theme.spacing.unit
  }
})
const PortfolioFromScratch = props => (
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
      quote="A comfort zone is a beautiful place, but nothing ever grows there."
    />
    <Typography component="p" className={props.classes.textBlock}>
      My best work by far would have to be my portfolio website. I feel like
      this project accurately represents my talents as it’s one of the few
      completed and elegant projects I’ve made. I built the entire site from the
      ground up, applied all of my knowledge of coding into the project, and
      learned some new aspects of web design.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      I built this portfolio from the scratch: hand coding everything without
      the assistance of frameworks. Frameworks have their uses, but I was more
      or less proving how much I knew about web design. This was our final
      project in the Computer Animation and Web Design program. On top of the
      independent factor, I also wanted to learn new things as a web designer. I
      find that using frameworks without knowing the underlying technology
      disrupts learning. I personally think that everyone starting out in coding
      should start out without frameworks, and work their way up once they fully
      understand the concepts behind them.{' '}
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      Web design has always been a passion of mine. I wanted to make sure to
      represent that in this work. I already knew most of what I accomplished in
      this project. For example, I wanted a navigation bar that displays three
      items on one side, and one or two on the other. This was simple for me as
      I had learned a specific CSS (Cascading Style Sheets) technology, called
      Flexbox. Flexbox allows developers to easily create responsive (mobile
      friendly) layouts. I knew how to lay out elements, such as the title
      (ALEXANDER CARDOSI), logo, and subheadings properly. Creating gradients
      was a breeze, and I already had experience with Material Design colors, so
      I decided to use those. I used my typical code editor, Atom, along with
      some of my favorite plugins. I utilized a CSS preprocessor, called SASS
      (Syntactically Awesome Style Sheets), which allows for variables to be
      stored. CSS later added this feature, but for this project I needed to use
      the preprocessor.
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      Along with my pre-existing knowledge, I also learned quite a bit
      throughout this project. I experimented a bit with CSS and figured out how
      to edit kerning, add delayed CSS animations, and how to handle SVGs in
      &lt;img&gt; tags. Most of my focus went into JavaScript, however. I
      learned how to create a size-changing navigation bar, how to add slide out
      option and hamburger menu when on mobile, and even how to make my own
      lightbox (upon clicking an image, a preview is loaded). All of these
      components were a bit difficult to create, but I’m glad I challenged
      myself since I learned so much.{' '}
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      This project is one of my favorites. It has so many features I like, and
      I’m brought back to how much I learned during it. Even though I created it
      last year, this project still has a modern design and I’m quite proud of
      it. If I was to make another portfolio, it’d have a completely different
      design, just to test my skills and give a fresh to look to the website.
      Overall, I’m very proud of this website and hope to create more like it.{' '}
    </Typography>
    <Typography component="p" className={props.classes.textBlock}>
      Stepping outside of my comfort zone is what motivated me to create this
      site. Before starting the project, I had never made a successful
      navigation bar with mobile support, or changed kerning to further support
      the design. Building this site with these features, even though I wasn’t
      comfortable with them, allowed me to further advance my skill set.
    </Typography>
  </div>
)

PortfolioFromScratch.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(PortfolioFromScratch)
