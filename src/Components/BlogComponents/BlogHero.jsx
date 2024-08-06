import React from 'react'

function blogHero() {
  return (
    <div>
      <div className='bg-[url("/src/assets/blogAssets/blogbanner/blogBanner.jpg")] max-md:h-[32vh] h-[38vh] bg-center bg-cover text-white text-center content-center'>
        <h3 className='text-5xl font-bold'>#readmore</h3>
        <p className='text-lg'>Read all case studies about our products!</p>
      </div>
    </div>
  )
}

export default blogHero