import React from 'react'
import { useSelector } from 'react-redux'
import LoadingComp from '../../Error&LoadingComponents/LoadingComp'
import { Link } from 'react-router-dom'

function Advertisement({ setAddDisplay }) {
    // get product to addvertize & loading...
    const { data, loading } = useSelector(state => state.productsData)
    // in apiData id start from 1 not 0
    const AddProduct = data[17 - 1]

    return (<>
        <Link to={`/shop/${AddProduct.id}`}>
            <div className='border-l-2'>
                <div className='flex justify-between bg-white text-gray-400 p-1 px-2'>
                    <h4 className='text-xs '>ADVERTISEMENT</h4>
                    {/* button to close advertisement */}
                    <Link><i onClick={() => setAddDisplay(false)} class="fa-solid fa-xmark p-1 hover:scale-110 duration-110 active:text-blue-600 text-gray-800"></i></Link>
                </div>

                <div className=' px-[7vw] py-7 h-fit flex gap-2 flex-col items-center bg-white'>

                    {/* advertizement while payment white loading... while fetching data */}
                    {loading ? <LoadingComp /> :
                        <>
                            <img src={AddProduct?.image} className='w-[100%]  max-h-[15vw] h-[fit] object-center object-contain' />
                        </>}
                    <h3 className='text-3xl mt-4 font-semibold text-gray-700'>Best Deal</h3>
                    {loading ? '' :
                        <h5 className='text-4xl font-medium text-gray-900'>${AddProduct?.price}</h5>
                    }
                </div>
            </div>
        </Link>
    </>)
}

export default Advertisement