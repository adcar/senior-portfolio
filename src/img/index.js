import nths from './nths.jpg'
import vermontSkills from './skillsVermont.jpg'
import nationalSkills from './skillsChampion.jpg'
import nthsCert from './nthsCert.jpg'
import honorsCert from './honorsCert.jpg'
import skillsCert from './skillsCert.jpg'

import portfolioFromScratch from './portfolio-from-scratch.jpg'
import uprightBuilders from './uprightBuilders.jpg'
import apollo from './apollo.jpg'

export { portfolioFromScratch, uprightBuilders, apollo }

export const awards = [
  {
    caption: 'SkillsUSA Vermont',
    src: vermontSkills
  },
  {
    caption: 'SkillsUSA Nationals',
    src: nationalSkills
  },
  {
    caption: 'National Technical Honor Society',
    src: nths
  }
]
export const certs = [
  {
    caption: 'NTHS Certificate',
    src: nthsCert
  },
  {
    caption: 'High Honors Certificate',
    src: honorsCert
  },
  {
    caption: 'SkillsUSA Certificate',
    src: skillsCert
  }
]

export const bestWorks = [
  {
    name: 'Portfolio from scratch',
    desc: 'Handcoded portfolio website built without any frameworks.',
    src: portfolioFromScratch
  },
  {
    name: 'Upright Builders',
    desc: 'Upright Builders, LLC website built with Wordpress',
    src: uprightBuilders
  },
  {
    name: 'Apollo',
    desc: 'Music streaming website built with React',
    src: apollo
  }
]
