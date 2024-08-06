import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../reduxToolkit/slices/cartSlice'
import LoadingComp from '../Error&LoadingComponents/LoadingComp'

function ShopContent() {
    const dispatch = useDispatch()
    //get data from redux toolkit slice / products data
    const { data, loading } = useSelector(state => state.productsData)

    //select category
    const [category, setCategory] = useState("all")
    return (<>
        <div className='p-[8vw] pt-0 flex flex-col'>
            <div className='text-center pt-16'>
                <h3 className='text-5xl text-gray-900 font-semibold mb-2'>Our Products</h3>
                <p className='text-gray-600'>Here you can check out our products listed.</p>
            </div>

            {/* check for loading */}
            {loading ? <LoadingComp />
                : <>

                    <div className='flex flex-wrap-reverse gap-4 max-md:justify-around justify-between items-center px-4 pt-14'>
                        <h3 className='text-3xl  text-gray-700 font-medium'>sorted Listings:-</h3>
                        <select name="" id="" onChange={(e) => setCategory(e.target.value)} className='w-fit max-sm:text-base text-xl bg-gray-600 rounded text-white p-1'>
                            <option value="all">All</option>
                            <option value="men's clothing" >Mens's clothing</option>
                            <option value="women's clothing">Women's clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value='electronics' >Electronics</option>
                        </select>
                    </div>
                    <div className='flex flex-wrap gap-y-16 gap-x-20 mt-20 justify-around'>
                        {
                            data.map((element,i) => {
                                //conditional return on category
                                return <>{category === element.category || category == "all" ? <Link key={i} to={`/shop/${element.id}`} className='w-[17rem] bg-white shadow-xl hover:shadow-2xl px-4 pt-5 pb-3 border-[#cce7d0] rounded-3xl border flex items-center flex-col'>
                                        <img src={element.image} className='h-[15rem] hover:scale-110 duration-150 object-contain ' alt="img" />
                                        <div className='w-full mt-2'>
                                            <p className='text-sm font-medium text-gray-500 pt-2'>{element.category}</p>
                                            <h3 className='line-clamp-1 text-[#1a1a1a] text-md w-full font-semibold'>{element.title}</h3>
                                            <div className='flex gap-1 mt-1 text-orange-400'>
                                                {
                                                    Array.from(Array(Math.floor(element.rating.rate)), () => {
                                                        return <i className="fa-solid fa-star"></i>
                                                    })
                                                }
                                            </div>
                                            <div className='flex justify-between my-1 items-center'>
                                                <h3 className='text-xl font-bold text-[#088178]'><i class="fa-solid fa-dollar-sign text-xl mr-[0.2rem]"></i>{element.price}</h3>
                                                <Link><button onClick={() => dispatch(addCart(element))} className='outline-none active:bg-[#ceffd5e8] hover:scale-110 h-[43px] w-[43px] text-[#088178] rounded-full text-center bg-[#e8f6ea] mr-2'><i className="fa-solid fa-cart-arrow-down"></i></button></Link>
                                            </div>
                                        </div>
                                    </Link> : ''}
                                </>
                            })
                        }
                    </div>

                </>}
        </div>
    </>)
}

export default ShopContent