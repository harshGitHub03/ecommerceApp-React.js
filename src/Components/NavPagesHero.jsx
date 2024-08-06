import React from 'react'
import aboutHero from '../assets/aboutAssets/aboutBanner.png'
function NavPageHero({navHeroImg,text}) {
    
    return (
        <div className=' relative text-center max-md:h-[32vh] h-[38vh] bg-slate-300 '>
            {/* nav hero image */}
            <img src={navHeroImg} className='w-full h-full object-cover' alt="" />

            {/* texts */}
            <div className='absolute h-fit w-fit left-0 right-0 top-0 bottom-0 m-auto text-white text-center'>
                <h4 className='text-5xl font-bold'>{text.heading}</h4>
                <p className='text-lg '>{text.subText}</p>
            </div>
        </div>
    )
}

export default NavPageHero