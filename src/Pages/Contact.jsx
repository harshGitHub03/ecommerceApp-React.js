import React from 'react'
import ContactContent from '../Components/ContactComponents/ContactContent'
import ContactHero from '../Components/ContactComponents/ContactHero'
import NavPageHero from '../Components/NavPagesHero'
import contactHeroImg from '../assets/aboutAssets/aboutBanner.png'
function Contact() {
  return (
    <>
      <NavPageHero navHeroImg={contactHeroImg} text={{ heading: "#let's_talk", subText: 'LEAVE A MESSAGE, We love to hear from you!' }} />
      <ContactContent />
    </>
  )
}

export default Contact