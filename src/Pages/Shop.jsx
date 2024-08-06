import React from 'react'
import shopHeroImg from '../assets/shopAssets/shopBanner.jpg'
import NavPagesHero from '../Components/NavPagesHero'

import ShopContent from '../Components/ShopComponents/ShopContent'

function Shop() {
  return (
    <div>
    <NavPagesHero navHeroImg={shopHeroImg} text={{ heading: '#KnowUs', subText: 'Explore Cara story from behind!' }} />
    <ShopContent/>
    </div>
  )
}

export default Shop