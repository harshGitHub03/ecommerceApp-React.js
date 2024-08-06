import React from 'react'
import NavPageHero from '../Components/NavPagesHero'
import blogHeroImg from "../assets/blogAssets/blogbanner/blogBanner.jpg"

import BlogContainer from '../Components/BlogComponents/BlogContainer'

function Blog() {
  return (<>
    <NavPageHero navHeroImg={blogHeroImg} text={{heading:'#readmore',subText:'Read all case studies about our products!'}} />
    {/* <BlogHero /> */}
    <BlogContainer />
  </>)
}

export default Blog