import React from 'react'
import HeroHome from '../Components/HomeComponents/HeroHome'
import Features from '../Components/HomeComponents/Features'
import FeaturedProducts from '../Components/HomeComponents/FeaturedProducts'
import ExploreMoreBanner from '../Components/HomeComponents/ExploreMoreBanner'
import NewArrivals from '../Components/HomeComponents/NewArrivals'
import BannersSection from '../Components/HomeComponents/BannersSection'

function Home() {
  return (<>
  <HeroHome/>
  <Features/>
  <FeaturedProducts/>
  <ExploreMoreBanner/>
  <NewArrivals bg='#e3e6f382'/>
  <BannersSection/>
  </>
  )
}

export default Home