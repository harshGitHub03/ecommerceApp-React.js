import React from 'react'
import NewsLetterSection from './NewsLetterSection'

function Footer() {
    return (<>
        <NewsLetterSection />

        <div className='flex flex-col gap-9 w-full  px-[7vw] pt-12 pb-4'>
            <div className=' flex justify-between flex-wrap gap-2 gap-y-8 '>

                <div className='flex flex-col gap-8 text-gray-800'>
                    <img src="/logo.png" className='w-[140px]' />

                    <ul>
                        <h4 className='mb-3 text-lg font-semibold'>Contact</h4>
                        <li ><strong className='font-medium'>Address:</strong> 562 Wellington Road, Street 32, india</li>
                        <li><strong className='font-medium'>Phone:</strong> +01 2222 365 /(+92)01 2345 6789</li>
                        <li><strong className='font-medium'>Address:</strong> 10:00 - 18:00,Mon-Sat</li>
                    </ul>

                    <div>
                        <h3 className='mb-3 text-lg font-semibold'>Follow Us</h3>
                        <ul className='flex text-lg'>
                        <li>
                            <i className="hover:scale-110 pl-0 active:text-blue-500 p-2 fa-brands fa-facebook-f"></i></li>
                            <li><i className="hover:scale-110 active:text-blue-500 p-2 fa-brands fa-twitter"></i></li>
                            <li><i className="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-instagram"></i></li>
                            <li><i className="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-pinterest-p"></i></li>
                            <li><i className="hover:scale-110 active:text-blue-500 p-2  fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>

                <ul className='gap-1 flex flex-col'>
                    <h4 className='mb-3 text-lg font-semibold'>About</h4>
                    <li>About Us</li>
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Contact Us</li>
                </ul>

                <ul className='gap-1 flex flex-col'>
                    <h4 className='mb-3 text-lg font-semibold'>My Account</h4>
                    <li>Sign In</li>
                    <li>View Cart</li>
                    <li>My Wishlist</li>
                    <li>Track My Order</li>
                    <li>Help</li>
                </ul>

                <ul className='flex flex-col gap-3'>
                    <h4 className=' text-lg font-semibold'>Install App</h4>
                    <li>From App Store or Google Play</li>
                    <li className='flex gap-2'>
                        <div className='hover:bg-gray-100 active:text-gray-700 cursor-pointer select-none px-7 py-1 flex items-center gap-1 rounded-md border-y-2 border-x border-gray-400'><i className="fa-brands fa-google-play text-2xl"></i> Google Play</div>
                        <div className='hover:bg-gray-100 active:text-gray-700 cursor-pointer select-none px-7 py-1 flex items-center gap-1 rounded-md border-y-2 border-x border-gray-400'><i className="fa-brands fa-apple text-3xl"></i> App Store</div>
                    </li>
                    <li>Secured Payment Gateways</li>
                    <img src="/src/assets/FooterAssets/pay.png" className='h-[2rem] w-fit' alt="" />

                </ul>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <hr className='w-full' />
                <p className='text-center text-[0.95rem] text-gray-600 font-medium'>Copyright© www.2024.harsh.Dev Ecommerce </p>
            </div>
        </div>
    </>)
}

export default Footer