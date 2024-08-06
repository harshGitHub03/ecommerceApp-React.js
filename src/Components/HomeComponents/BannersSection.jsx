import React from 'react'
import { Link } from 'react-router-dom'

function BannersSection() {
    return (<>
        <div className=' px-[5vw] md:px-[7vw] py-14 max-sm:py-10 flex flex-col gap-10'>
            <div className='flex max-sm:flex-wrap justify-between max-sm:justify-around gap-8'>
                <div className='group/banner1 bg-[url("/src/assets/homeAssets/postersSection/banner1.jpg")] lg:h-[23vw] w-[100%] bg-right bg-cover text-white flex  flex-col justify-center  px-[3.5vw] max-sm:px-[6vw]  max-lg:py-6 gap-1'>
                    <h4 className='max-sm:text-xl text-2xl'>crazy deals</h4>
                    <h2 className='text-4xl font-bold'>buy 1 get 1 free</h2>
                    <h4 className='text-lg mt-1 font-medium'>The best classic dress is on sale at cara</h4>
                    <Link to='/shop'><div className='group-hover/banner1:bg-[#08726a] group-hover/banner1:border-transparent border border-white w-fit cursor-pointer group-active:bg-[#075852]  px-5 py-2 mt-2 font-medium'>Learn More</div></Link>
                </div>
                <div className='group/banner2 bg-[url("/src/assets/homeAssets/postersSection/banner2.jpg")] lg:h-[23vw] w-[100%] bg-right bg-cover text-white flex  flex-col justify-center px-[3.5vw] max-sm:px-[6vw]  max-lg:py-6 gap-1 '>
                    <h4 className='max-sm:text-xl text-2xl'>spring / summer</h4>
                    <h2 className='text-4xl font-bold'>upcoming season</h2>
                    <h4 className='text-lg mt-1 font-medium'>The best classic dress is on sale at cara</h4>
                    <Link to="/shop"><div className='group-hover/banner2:bg-[#08726a] group-hover/banner2:border-transparent active:bg-[#075852] border border-white w-fit cursor-pointer hover:bg-[#088178] px-5 py-2 mt-2 font-medium'>Learn More</div></Link>
                </div>
            </div>

            <div className='flex justify-between max-md:gap-6 gap-8'>
                <div className='bg-[url("/src/assets/homeAssets/postersSection/banner3.jpg")] h-[16vw] w-[100%] bg-cover max-sm:bg-center text-white flex flex-col justify-center px-[2vw] max-md:py-[12vw] '>
                    <h3 className='max-md:leading-8 max-lg:leading-[24px] mb-1 max-md:text-xl text-3xl font-bold'>SEASON SALE</h3>
                    <h4 className='max-md:leading-5 max-lg:leading-[20px] max-md:text-base text-xl font-bold text-red-700'>Winter Collection -50% OFF</h4>
                </div>
                <div className='bg-[url("/src/assets/homeAssets/postersSection/banner4.jpg")] h-[16vw] w-[100%] max-sm:bg-center bg-cover text-white flex flex-col justify-center px-[2vw] max-md:py-[12vw]'>
                    <h3 className='max-md:leading-8 max-lg:leading-[24px]  mb-1 max-md:text-xl text-3xl font-bold'>SEASON SALE</h3>
                    <h4 className='max-md:leading-5 max-lg:leading-[20px] max-md:text-base text-xl font-bold text-red-700'>Winter Collection -50% OFF</h4>
                </div>
                <div className='bg-[url("/src/assets/homeAssets/postersSection/banner5.jpg")] max-sm:hidden h-[16vw] w-[100%] bg-cover text-white flex flex-col justify-center px-[2vw] max-md:py-[12vw]'>
                    <h3 className='max-md:leading-8 max-lg:leading-[24px] mb-1 max-md:text-xl text-3xl font-bold'>SEASON SALE</h3>
                    <h4 className='max-md:leading-5 max-lg:leading-[20px] max-md:text-base text-xl font-bold text-red-700'>Winter Collection -50% OFF</h4>
                </div>
            </div>
        </div>
    </>)
}

export default BannersSection