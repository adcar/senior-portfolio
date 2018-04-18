import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import PageLabel from '../components/PageLabel'
import CommunityServiceProof from '../img/community-service-proof.jpg'
const styles = theme => ({
  indent: {
    textIndent: '2em'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  proof: {
    width: 300,
    marginLeft: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      float: 'right'
    }
  }
})

const CommunityService = props => (
  <div className={props.classes.wrapper}>
    <PageLabel>Community Service</PageLabel>
    <img
      className={props.classes.proof}
      src={CommunityServiceProof}
      alt="Community Service Proof"
    />
    <Typography className={props.classes.indent}>
      Community service is an essential component of academics. It not only
      allows you to learn from others, but lets you contribute to a better
      society as well. For my community service, I participated in the Donald
      Trump presidential campaign for the 2016 election in Concord, New
      Hampshire.
    </Typography>

    <Typography className={props.classes.indent}>
      Campaigning for the presidential election involved me holding up signs,
      helping out with carrying our gear and calling people. For the
      sign-holding duration of the campaign, we stood outside on a street corner
      in Concord. We would move around the signs, wave at the cars, switch signs
      to keep ourselves occupied. There was lots of positive feedback from other
      Trump supporters (such as car beeps and waves). Of course, there was also
      the negative feedback from the hostile Clinton supporters. Then, we went
      back inside and handled the phones. I called quite a few people during
      this period (mostly just leaving messages, reading off my script). I
      accomplished quite a bit because I went through many sheets full of phone
      numbers (which allowed me to get closer to the front of the stadium where
      Trump held a rally). The more people that helped the Trump campaign the
      better, which was a needed service for the election of the finest
      president in U.S. history.
    </Typography>

    <Typography className={props.classes.indent}>
      I chose to campaign for Donald Trump because my aunt told me about the
      opportunity and I thought it&rsquo;d be a great way to not only watch a
      Trump rally, but also get him elected. I was fascinated with Trump and
      supported every decision he&rsquo;d made during the election, and wanted
      to help such a brilliant man become the next president. A strong indicator
      that I made a difference would be that Trump won the election. Although,
      he didn&rsquo;t win New Hampshire, which is a bit of a shame, but he did
      come close (which I would like to think I helped with). Being able to help
      such an important figure in American politics gave me both a sense of
      accomplishment and pride.
    </Typography>

    <Typography className={props.classes.indent}>
      Society relies on volunteers simply because some organizations don&rsquo;t
      generate revenue. In this case, becoming the president of the United
      States doesn&rsquo;t pay very well (400k a year, although Trump only takes
      $1 a year because the law requires him to). This job clearly doesn&rsquo;t
      pay well compared to great cost of campaigning. So why do it? Simply
      because Trump finds it in his heart to help others and make this country
      great again. The selfless act of running for president is what drew me
      towards working and campaigning for Donald Trump. There are of course
      other organizations (such as charities) that aren&rsquo;t run for the
      purpose of generating revenue and therefore rely on volunteers and
      donations.
    </Typography>
    <Typography className={props.classes.indent}>
      When hearing about community service I felt rather pessimistic. I
      didn&rsquo;t feel like it was important skill and I needed to focus more
      on academics. However, when the opportunity to volunteer the greatest
      presidential-candidate of all time had arised, I had to take it. When
      starting the campaign, my attitude immediately changed. I was greeted with
      respect and kindness from the others around me, it was all very civil and
      well organized. I was proud to be volunteering for such a wonderful
      campaign.
    </Typography>
    <Typography className={props.classes.indent}>
      Overall I gained some valuable insight into what a presidential campaign
      looks like, and how to properly work with others in a real-world
      environment. I will probably volunteer again (for Donald Trump&rsquo;s
      second term) if my schedule permits it.
    </Typography>
    <br />
  </div>
)

CommunityService.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CommunityService)
