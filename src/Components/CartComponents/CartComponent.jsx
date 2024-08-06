import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, decrementItem, incrementItem, getTotal } from '../../reduxToolkit/slices/cartSlice'


function CartComponent({ setPaymentDisplay }) {
    const dispatch = useDispatch()
    const { cart, totalAmount } = useSelector(state => state.cartData)

    //updateTotalAmount on cartData Change
    useEffect(() => {
        dispatch(getTotal())
    }, [cart])

    return (
        <div>
            <div className='mx-[7vw] my-[4vw] max-sm:my-[5vw]  m-auto'>
                <h2 className='text-[2.5rem] max-sm:text-center text-gray-700 font-medium'>Shopping Cart</h2>
                <hr className='border my-6 mt-8 mb-5' />
                <div className='max-h-[530px] overflow-y-auto'>
                    <table border='1' className='w-[90%] mx-auto'>
                        <thead>
                            <tr className='sticky top-[0px] bg-white text-md text-gray-600'>
                                <th className='pb-[20px] text-start pt-[10px] font-medium'>PRODUCT DETAILS</th>
                                <th className='pb-[20px] pt-[10px] font-medium px-[3vw]'>PRICE</th>
                                <th className='pb-[20px] pt-[10px] font-medium px-[4vw]'>QUANTITY</th>
                                <th className='pb-[20px] pt-[10px] font-medium px-[3vw]'>TOTAL</th>
                                <th className='pb-[20px] pt-[10px] font-medium px-[3vw] '>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.map((element,i) => {
                                return <tr key={i}>
                                    <NavLink to={`/shop/${element.id}`}><td className='flex items-center gap-3 my-6'>
                                        <div className='h-[7rem] max-md:h-[6rem] max-md:w-[6rem] w-[7rem] flex justify-center max-md:p-1 p-2 border-2'><img src={element?.image} className='object-contain object-center w-full' alt="" /></div>
                                        <div>
                                            <h4 className='max-sm:text-base max-sm:leading-5 text-lg font-medium w-[30vw] line-clamp-2'>{element?.title}</h4>
                                            <h5 className='max-sm:leading-5 font-medium text-gray-600'>{element?.category}</h5>

                                        </div>
                                    </td>
                                    </NavLink>
                                    <td className='text-center text-lg font-medium py-6 '>${element.price}</td>
                                    <td className='text-center py-6 '>
                                        <div className='flex gap-2 justify-center items-center'>
                                            <button onClick={() => element.quantity > 1 ? dispatch(decrementItem(element)) : dispatch(removeFromCart(element))} className='px-3 py-1 hover:scale-110 active:text-blue-500'><i class="fa-solid fa-minus"></i></button>
                                            <p className='font-medium text-xl border-2 px-2'> {element.quantity}</p>
                                            <button onClick={() => dispatch(incrementItem(element))} className='px-3 py-1 hover:scale-110 active:text-blue-500'><i class="fa-solid fa-plus"></i></button>
                                        </div>
                                    </td>
                                    <td className='text-center text-lg font-medium py-6'>${Math.floor(element.quantity * element.price * 100) / 100}</td>
                                    <td className='text-center py-6 text-xl '><i onClick={() => dispatch(removeFromCart(element))} class="fa-solid fa-xmark p-2 hover:scale-110 active:text-blue-500"></i></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <hr className='border' />
                <div className='flex flex-wrap items-start max-sm:justify-center max-lg:justify-around justify-between py-4 mr-[4vw] ml-[2vw] gap-8 gap-y-2'>
                    <Link to='/shop'><button className='text-white justify-self-start px-4 py-2 text-lg font-medium bg-[#08726a] hover:bg-[#16837b] active:bg-[#0c544f] my-6'><i class="fa-solid fa-arrow-left "></i> Continue shopping</button></Link>
                    <div className='w-[24rem] max-md:place-self-center bg-gray-100 p-6 pt-0 mt-5'>
                        <div className='flex py-6  justify-between items-center text-lg font-medium'>
                            <h4 className=' text-gray-700'>TOTAL ITEMS: {cart.length}</h4>
                            {/* math.floor to show 2 numbers only after decimal */}
                            <h5 className='max-md:text-xl text-2xl' >${Math.floor(totalAmount * 100) / 100}</h5>
                        </div>
                        <hr className='border' />
                        <div className='flex py-6 justify-between items-center text-lg font-medium'>
                            <h4 className=' text-gray-700'>Shipping charge:</h4>
                            <h5 >$12/item</h5>
                        </div>
                        <hr className='border' />
                        <div className='flex py-6 justify-between items-center text-xl font-medium'>
                            <h4 className='text-gray-700'>TOTAL COST:</h4>
                            {/* math.floor to show 2 numbers only after decimal */}
                            <h5 className='max-md:text-2xl text-3xl'>${Math.floor(((cart.length * 12) + totalAmount) * 100) / 100}</h5>
                        </div>
                        <button onClick={() => setPaymentDisplay(true)} className='text-lg text-white w-full font-medium mt-3 py-[0.5rem] bg-[#08726a] active:bg-[#0f5550] hover:bg-[#0d655f] '>CHECK OUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartComponent