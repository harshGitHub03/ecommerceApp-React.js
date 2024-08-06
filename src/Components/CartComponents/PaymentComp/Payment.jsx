import React, { useEffect, useRef, useState } from 'react'
import Advertisement from './Advertisement'
import { useSelector } from 'react-redux'

function Payment({ setPaymentDisplay }) {
   const {cart, totalAmount}=useSelector(state=>state.cartData)

    // show hide addvertisement comp
    const [AddDisplay, setAddDisplay] = useState(true)

    // hide scrollbar while payment component
    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        return () => document.body.style.overflowY = 'scroll'
    })

    // hide payment comp on click outside payment & advertisement comp
    const ref = useRef()
    useEffect(() => {
        const handleClick = (e) => {
            if (e.target === ref.current) {
                setPaymentDisplay(false)
            }
        }
        document.body.addEventListener('click', handleClick)

        return () => document.body.removeEventListener('click', handleClick)
    })

    return (
        <div ref={ref} className='bg-[#000000a1] h-screen w-screen flex items-center justify-center fixed top-0 z-10'>
            <div className='flex max-w-[85vw] relative bg-white flex-col py-8 pt-6 px-9 max-sm:gap-4 max-md:gap-5 gap-7'>

                {/* close ICon payment comp */}
                <i onClick={() => setPaymentDisplay(false)} class="fa-solid fa-xmark absolute top-2 right-2 p-1 hover:scale-110 duration-110 active:text-blue-600 text-gray-800"></i>

                <div className='text-lg flex flex-col gap-4 max-md:gap-3 max-sm:gap-2 text-gray-600'>
                    <h3 className='font-medium text-2xl text-black'>Shopping Cart</h3>
                    <div className='flex text-base justify-between text-black font-medium'>
                        <h4 className='flex gap-1 items-center text-black'>TOTAL ITEMS : <p className=' text-lg'>{cart.length}</p></h4>
                        <h4>${Math.floor(( totalAmount) * 100) / 100}</h4>
                    </div>
                    <div className='flex text-base justify-between font-medium'>
                        <h4 >SHIPPING:</h4>
                        <h4>$12/item</h4>
                    </div>
                    <div className='flex text-black justify-between font-medium'>
                        <h4>GRAND TOTAL:</h4>
                        {/* will show 2 digit only after decimal in total */}
                        <h4>${Math.floor(((cart.length * 12) + totalAmount) * 100) / 100}</h4>
                    </div>
                </div>

                <hr className='border' />

                <form onSubmit='' className='flex flex-col max-md:gap-3 gap-4'>
                    <div className='flex flex-wrap items-center gap-1 justify-between'>
                        <h3 className='font-medium text-2xl text-black'>Payment Method</h3>
                        <img src="/src/assets/FooterAssets/pay.png" className='h-[1.5rem] max-sm:h-[1.2rem] w-fit' alt="" />
                    </div>
                    <label className='flex w-full border-2 '>
                        <input type="text" required placeholder='Card Number' className='outline-gray-500 p-2 w-[100%]' />
                        <div className='text-3xl px-2 text-blue-900'><i class="fa-brands fa-cc-visa"></i></div>
                    </label>
                    <div className='flex max-sm:flex-wrap gap-3'>
                        <input type="text" required className='border-2 w-full outline-gray-500 p-2' placeholder='First Name' />
                        <input type="text" required className='border-2 w-full outline-gray-500 p-2' placeholder='Last Name' />
                    </div>

                    <div className='flex gap-3'>
                        <div className='flex flex-col justify-between gap-1 w-[50%]'>
                            <h6 className='text-[0.8rem] font-medium text-gray-500'>Expiration Date</h6>
                            <div className='flex gap-2'>
                                <select name="month" required className='border-2 w-full'>
                                    <option value="">Jan</option>
                                    <option value="">Feb</option>
                                    <option value="">Mar</option>
                                    <option value="">Apr</option>
                                    <option value="">May</option>
                                    <option value="">Jun</option>
                                    <option value="">Aug</option>
                                    <option value="">Sep</option>
                                    <option value="">Oct</option>
                                    <option value="">Nov</option>
                                    <option value="">Dec</option>
                                </select>
                                <p>/</p>
                                <input type="number" required placeholder='2024' min='1900' max='2024' name='year' className=' pl-1 w-full border-2' />
                            </div>
                        </div>

                        <div className='w-[50%] flex flex-col gap-1'>
                            <h6 className='text-[0.8rem] font-medium max-sm:leading-4 text-gray-500'>The Last 3 digit code of the card</h6>
                            <input type="text" required placeholder='CVV' className='outline-gray-500 px-1 border-2' />
                        </div>
                    </div>

                    <button className='p-2 outline-none mt-2 bg-green-600 hover:bg-[#16a34aeb] active:shadow-lg active:bg-green-700 text-white font-medium'>PLACE ORDER</button>

                </form>
            </div>

            {/* addvertisement while paying */}
            <div className='max-lg:hidden'>
            {AddDisplay ? <Advertisement setAddDisplay={setAddDisplay} /> : ''}
            </div>
        </div>
    )
}

export default Payment