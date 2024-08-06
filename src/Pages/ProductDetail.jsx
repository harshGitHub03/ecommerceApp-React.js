import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addCart } from '../reduxToolkit/slices/cartSlice'
import LoadingComp from '../Components/Error&LoadingComponents/LoadingComp'
import NewArrivals from '../Components/HomeComponents/NewArrivals'

function ProductDetail() {
    //dynamic routing to get id
    const { productId } = useParams()

    //get product data
    const productData = useSelector(state => state.productsData.data[productId - 1])
    const loading = useSelector(state => state.productsData.loading)
    const dispatch = useDispatch()

    return (<>
        {loading ? <LoadingComp />
            : <>
                <div className='p-[7vw] py-[6vw] max-lg:py-[5rem] max-sm:py-[14vw]'>

                    <div className='flex max-lg:flex-wrap justify-center max-lg:gap-12 gap-4'>
                        <div className=' h-[26vw] w-[26vw] max-[1200px]:w-[30vw] max-[1200px]:h-[30vw]  max-lg:w-[21rem] max-lg:h-[21rem] max-sm:w-[50vw] max-sm:h-[50vw] max-[500px]:h-[60vw] max-[500px]:w-[60vw] hover:scale-95 hover:border-none object- duration-150 border-2 border-gray-200 hover:shadow-[none] shadow-2xl max-md:p-1 max-lg:p-2 p-3 flex justify-center items-center'>
                            <img src={productData.image} className='h-full object-contain  hover:scale-[1.4] duration-150' alt="" />
                        </div>
                        <div className='text-lg  max-lg:w-full w-3/5 pt-2 flex flex-col items-start gap-3 justify-center lg:px-12'>
                            <p className='font-medium text-gray-700'>Shop/{productData.category}</p>
                            <h4 className='text-3xl font-medium'>{productData.title}</h4>
                            <div className='flex py-2 pb-1'>
                                <h5 className='text-xl font-medium pr-2'><i class="fa-solid fa-star text-orange-400"></i> {productData.rating.rate}</h5>
                            </div>
                            <h5 className='text-4xl pb-1 font-semibold'>${productData.price}</h5>
                            <button onClick={() => dispatch(addCart(productData))} className='px-6 select-none font-semibold rounded hover:bg-[#16837b] active:bg-[#0c544f] text-white py-2 bg-[#08726a]'>Add to Cart</button>
                            <h5 className='text-2xl pt-2 font-semibold'>Product Details</h5>
                            <p className=''>{productData.description}</p>
                        </div>

                    </div>
                </div>
                
                <hr className='mx-[8vw] mt-10 border'/>
                <NewArrivals bg='#ffffff82' />
            </>
        }</>)
}

export default ProductDetail