import React from 'react'
import { Link } from 'react-router-dom'
// import heroImg from '../assets/homeAssets/heroHome.png'


function HeroHome() {

    return (<>
        <div className={`bg-[url('/src/assets/homeAssets/heroSection/heroHome.png')] bg-cover h-[90vh] bg-right-top max-md:bg-center flex flex-col justify-center items-start`}>
            <div className='mx-[7vw] flex flex-col gap-1'>
                <h4 className='text-gray-800 font-medium text-xl'>Trade-in-offer</h4>
                <h3 className='text-6xl font-semibold'>Super value deals<br /><h3 className='text-[#088178]'>On all products</h3></h3>
                <p className='text-lg mt-2 text-gray-500'>Save more with coupons & up to 70% off!</p>
                <Link to='/shop' ><button className="bg-[url('/src/assets/homeAssets/heroSection/buttonBg.png')] text-[#088178] font-bold w-52 mt-3 py-3 bg-no-repeat bg-cover bg-center">
                    Shop Now
                </button></Link>
            </div>
        </div>
    </>
    )
}

export default HeroHome