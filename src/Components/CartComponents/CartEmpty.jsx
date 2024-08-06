import React from 'react'
import { Link } from 'react-router-dom'

function CartEmpty() {
    return (<>
        <div className='flex flex-col my-11 gap-10'>
            <div className='px-[7vw] max-sm:text-center'>
                <h2 className='text-[2.5rem] text-gray-700 font-medium'>Shopping Cart</h2>
                {/* <hr className='border my-6 mt-8 mb-1' /> */}
            </div>

            <div className='text-8xl text-center bg-gray-300 p-6 shadow-xl'>
                <i class="fa-solid fa-dolly"></i>
            </div>
            <div className='flex flex-col items-center text-center gap-2'>
                <h2 className='text-3xl font-medium'>Your Cart is Empty!</h2>
                <h2>Looks like you haven't added anything in your cart yet!</h2>
                <Link to='/shop'><button className='text-white px-4 py-2 text-lg font-medium bg-[#08726a] hover:bg-[#16837b] active:bg-[#0c544f] my-6'><i class="fa-solid fa-arrow-left "></i> Continue shopping</button></Link>
            </div>
        </div>
    </>
    )
}

export default CartEmpty