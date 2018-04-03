import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardContent } from 'material-ui/Card'
import Link from 'gatsby-link'
const styles = theme => ({
  wrapper: {
    paddingTop: theme.spacing.unit * 3,
    padddingBottom: theme.spacing.unit * 3
  },
  indent: {
    textIndent: '2em'
  },
  card: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  }
})

const Recommendations = props => (
  <div className={props.classes.wrapper}>
    <Typography variant="display2" component="h1" align="center" gutterBottom>
      Letters of Recommendation
    </Typography>
    {/* Mrs. Quinn's recommendation letter */}
    <Card className={props.classes.card}>
      <CardContent>
        <Typography component="p">To Whom it May Concern:</Typography>
        <br />
        <Typography component="p" className={props.classes.indent}>
          Alex Cardosi stands out as an example to others in terms of industry,
          creativity, and passion. Alex elected to take the significantly more
          challenging college-level Vermont Composition course, despite the fact
          that this class requires far more of students than a typical English
          class. He seeks out learning and takes advantage every available
          opportunity to engage in self-development. Once introduced to a
          concept, Alex runs with the knowledge, delving deeper into the idea by
          researching a variety of sources. He immerses himself in research and
          academic exploration, emerging flush with new ideas. His analysis and
          synthesis of research are consistently original. He excels at
          connecting conceptual ideas to the real world.<br />
        </Typography>
        <Typography component="p" className={props.classes.indent}>
          However, the most impressive asset of Alex is that he applies his
          knowledge. He does not learn for a test. He learns to prepare him to
          achieve his goals. He continually recalls information taught earlier
          in the year or even from other classes. He uses his accumulated
          knowledge to improve his understanding of the world around him and
          help others. I&rsquo;ve seen Alex challenge apathy in a thousand ways.
          He does not simply accept ideas; he demands sound reasoning. Alex
          thinks critically, often coming up with unexpected but soundly
          reasoned ideas.<br />
        </Typography>
        <Typography component="p" className={props.classes.indent}>
          I can attest to his consistent quest for personal excellence. His
          coding, website design, and skill with computers set him apart. His
          passion for coding, website design, and for making sense of the world
          are only part of what makes Alex an exceptional student. A work ethic
          like Alex&rsquo;s coupled with his keen intelligence spells success.<br />
          If you have any questions about Alex, please do not hesitate to
          contact me. I welcome further opportunity to discuss Alex&rsquo;s many
          accomplishments and qualities
        </Typography>
        <br />
        <Typography component="p">Sincerely,</Typography>
        <br />
        <Typography component="p" className={props.classes.indent}>
          Emily Quinn
        </Typography>
        <br />
        <Typography component="p">
          Emily Quinn<br />
          English teacher<br />
          (802) 857-7000 ext. 1719<br />
        </Typography>
      </CardContent>
    </Card>
    {/* Mrs. Charron's recommendation letter */}
    <Card className={props.classes.card}>
      <CardContent>
        <Typography component="p" align="center">
          Letter of Recommendation for Alexander Cardosi
        </Typography>
        <br />
        <Typography>January 2018</Typography>
        <br />
        <Typography component="p">
          <strong>Distinctive Qualities:</strong> ​Alex is an incredibly
          dedicated, talented and passionate student. Alex has attended the
          Center for Technology, Essex since his sophomore year when he joined
          our Pre-Tech program. For his junior and senior years he has been a
          member of our Computer Animation & Web Design (CAWD) program, where he
          has been grown his coding and web design skills and is a natural
          leader. Alex is an introvert who has, very slowly become more
          communicative and outgoing through his high school career. His peers
          look to him to help solve complex coding problems and they take note
          of his design prowess. His ability to pick up languages and concepts
          really make him stand out.<br />
        </Typography>
        <br />
        <Typography component="p">
          <strong>Academics and Intellectual Growth:</strong>
        </Typography>
        <ul style={{ margin: 0 }}>
          <li>
            <Typography>
              Alex has been a straight ‘A’ student throughout his three years
              here at CTE. He has worked diligently and productively to stay up
              on his grades and has done so with (what looks like) ease. He has
              a strong work ethic that pushes him to see intellectual obstacles
              as learning opportunities and and the potential for growth.
            </Typography>
          </li>
          <li>
            <Typography>
              Last year Alex took two college courses, Website Development, and
              Introduction to Python Programing. This year Alex is taking 5
              college courses, Precalculus 1, Precalculus 2, Introduction to
              College English, English Composition, and Introduction to Linux.
              He will be graduating high school with 21 college credits under
              his belt. Alex has proven that he can handle the rigours of
              college coursework and is willing to rise to the occasion.
            </Typography>
          </li>
          <li>
            <Typography>
              Alex is a member of National Technical Honor Society and is on
              track to be a returning member this year. He is a valued member of
              the organization and is a worthy recipient of such an honor.
            </Typography>
          </li>
        </ul>
        <br />

        <Typography component="p">
          <strong>Areas of Impact and Interests:</strong>
        </Typography>
        <ul style={{ margin: 0 }}>
          <li>
            <Typography>
              Because of his innate talent and curiosity in programing and web
              design, Alex often spends free time at home working on his own
              open source projects and teaching himself new software. He is
              driven by following a project through to completion and getting to
              see the final product.
            </Typography>
          </li>
          <li>
            <Typography>
              Because of all of his additional studying and hard work Alex and
              his partner won Gold in the Vermont SkillsUSA competition for Web
              Design. They then went on to Kentucky to compete nationally, and
              WON GOLD competing against other talented students from across the
              country. I believe they will compete again in hopes to be a two
              year gold medal winner.
            </Typography>
          </li>
        </ul>
        <br />
        <Typography>
          <strong>Additional Comments:</strong> ​Alex will be a wonderful
          addition to any college or university, especially one that has like
          minded people, and professors that challenge him and can connect him
          to resources to keep feeding his curious mind.
        </Typography>
        <br />
        <Typography component="p">Best,</Typography>
        <br />
        <Typography component="p" className={props.classes.indent}>
          Emmy J. Charron
        </Typography>
        <br />
        <Typography component="p">
          Emmy Charron <br />
          CTE School Counselor <br />
          echarron@ewsd.org <br />
        </Typography>
      </CardContent>
    </Card>

    {/* Mr Moore's recommendation letter */}
    <Card className={props.classes.card}>
      <CardContent>
        <Typography component="p">To Whom it May Concern,</Typography>
        <br />
        <Typography component="p">
          I would like to recommend Alex Cardosi for admission to your college.
          I have been Alex’s teacher for the past year now but have known Alex
          in my program for two years. Alex has attended the program of Computer
          Animation and Web Page Design (CAWD) for two years in the focus of Web
          Design and Multimedia Development. I feel with Alex’s skillset, they
          would be an excellent addition to your college.
        </Typography>
        <br />
        <Typography component="p">
          While a student in CAWD, Alex has always challenged themselves
          academically. They are an active participant in class discussions, and
          grasps material quickly. It really helps that Alex has chosen our
          program of study to pursue, to get a head start in a career pathway of
          choice. Outside of our program, Alex has pushed themself academically
          to gain the skills to be prepared for immediate job or further
          education.
        </Typography>
        <Typography component="p">
          Alex is a curious individual. He constantly seeks new opportunities to
          further his skillsets. He really likes to try new things, new
          projects, and new experiences to broaden his skills. Alex uses his
          skills to help others around him learn as well. He has been a
          cornerstone to his classmates and can be a reliable teammate for group
          or team situations. Alex is a very tech savvy student, making it very
          easy for him to pick up languages, programs, or experiences that cross
          his path. Over the last few years, Alex has participated in college
          prep and college credit course (Intro to Linux, Python Programming,
          Web Development), National Gold Medalist for SkillsUSA Web Design
          competition, National Technical Honor Society, and High Honors. These
          accomplishments show Alex’s strive for creativity, but more
          importantly the strive for education.
        </Typography>
        <br />
        <Typography component="p">
          Alex would bring so much to your school both inside and outside the
          classroom. If you have any questions regarding Alex’s qualifications,
          please feel free to contact me at (802) 734-4388 or lmoore@ewsd.org.
        </Typography>
        <br />
        <Typography component="p">
          Sincerely, Lorand Moore <br />
          Computer Animation and Web Page Design Teacher <br />
          Center for Technology Essex <br />
        </Typography>
      </CardContent>
    </Card>
  </div>
)

export default withStyles(styles)(Recommendations)
