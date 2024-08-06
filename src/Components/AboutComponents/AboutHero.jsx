import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function AboutHero() {
 return (
    <div>
      <div className='bg-[url("/src/assets/aboutAssets/aboutBanner.png")] max-md:h-[32vh] h-[38vh] bg-center bg-cover text-white text-center content-center'>
        <h3 className='text-5xl font-bold'>#KnowUs</h3>
        <p className='text-lg'>Explore Cara story from behind!</p>
      </div>
    </div>
  )
}

export default AboutHero