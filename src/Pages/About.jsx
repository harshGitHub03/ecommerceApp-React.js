import React from 'react'
import NavPageHero from '../Components/NavPagesHero'
import aboutHeroImg from '../assets/aboutAssets/aboutBanner.png'

import AboutContent from '../Components/AboutComponents/AboutContent'

function About() {
  return (<>
  <NavPageHero navHeroImg={aboutHeroImg} text={{heading:"#KnowUs" ,subText:'Explore Cara story from behind!'}}/>
 <AboutContent />
  </>)
}

export default About