import React from 'react'
import aboutImg from '../../assets/aboutAssets/aboutImg.jpg'
import downloadApp from '../../assets/aboutAssets/downloadApp.mp4'
import Features from '../HomeComponents/Features'
function AboutContent() {
    return (
        <div className='py-[7vw] md:py-20'>
            <div className='flex max-[800px]:flex-wrap max-lg:justify-center max-md:gap-[3vw] max-lg:gap-[4vw] justify-around max-lg:px-[6vw] px-[7vw]'>
                <img src={aboutImg} className='max-sm:w-[100%] h-fit max-[800px]:w-[85%] w-[38vw]' alt="" />
                <div className='max-sm:w-[100%] max-[800px]:w-[85%] max-lg:w-[40vw] max-lg:w-[37vw] w-[35vw] max-md:mt-[1rem] content-center flex flex-col justify-center gap-3'>
                    <h2 className='text-5xl font-bold'>Who We Are?</h2>
                    <p className=' w-full text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum saepe iste atque dolorem amet quisquam harum laborum aliquid error voluptas voluptatibus totam magni doloribus magnam, tempore eveniet vero. Atque, culpa?
                        Aliquid, repellat. Veritatis, pariatur aspernatur explicabo quas, nobis sapiente ut.</p>
                    <div className='w-full bg-gray-400 overflow-hidden mt-1'>
                    <p className='animate-scrollEffect text-white'>Buy Amazing stuff From <strong>Cara</strong> By harsh.Dev.in</p>
                    </div>
                </div>
            </div>
            <Features/>
            <div className='flex flex-col items-center px-[7vw]'>
                <p className='max-md:text-4xl text-5xl text-center font-medium'>Download Our <span className='text-blue-800 hover:text-blue-600 active:text-blue-700 underline decoration-[2px]'>App</span></p>
                <video src={downloadApp} className='md:w-[50vw] mt-10 md:mt-12 rounded-2xl' autoPlay loop></video>
            </div>
        </div>
    )
}

export default AboutContent
