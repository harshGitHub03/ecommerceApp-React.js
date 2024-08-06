import React from 'react'
import { Link } from 'react-router-dom'

function ExploreMoreBanner() {
  return (
    <div className='bg-[url("/src/assets/homeAssets/exploreMoreBanner/homeExploreBanner.jpg")] h-[40vh] bg-center bg-cover text-white flex flex-col items-center justify-center gap-5'>
        <h5 className=' font-medium'>Repair Services</h5>
        <h3 className='text-3xl text-center font-semibold'>Up to 70% Off - All t-shirts & Accessories</h3>
        <Link to='/shop'><div className='bg-[#08726a] cursor-pointer hover:bg-[#088178] active:bg-[#0c544f] px-5 py-2 rounded font-medium'>Explore More</div></Link>
    </div>
  )
}

export default ExploreMoreBanner