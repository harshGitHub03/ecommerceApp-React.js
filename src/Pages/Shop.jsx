import React from 'react'
import shopHeroImg from '../assets/shopAssets/shopBanner.jpg'
import NavPagesHero from '../Components/NavPagesHero'

import ShopContent from '../Components/ShopComponents/ShopContent'

function Shop() {
  return (
    <div>
    <NavPagesHero navHeroImg={shopHeroImg} text={{ heading: '#stayhome', subText: 'Save more with coupons & up to 70% off!' }} />
    <ShopContent/>
    </div>
  )
}

export default Shop