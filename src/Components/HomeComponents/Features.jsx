import React from 'react'
import featuresAssets from '../../assets/featuresAssets/feathuresAssets'

function Features() {
    return (<div className='py-24 pt-20 flex flex-col gap-16'>
        <div className='text-center'>
            <h3 className='text-5xl font-semibold mb-2'>Our Services</h3>
            <p className='text-gray-600'>korem ipsum dolor sit amet consectetur. </p>
        </div>
        <div className='flex justify-around px-[7vw] gap-2 gap-y-6 flex-wrap '>
            {
                featuresAssets.map((element, i) => {
                    return <>
                        <div className='w-fit p-4 border-2 shadow-xl text-lg flex flex-col items-center rounded gap-3 '>
                            <img src={element.image} className='h-[10vw] max-md:h-[20vw] object-center' alt="img" />
                            <p className='px-2 text-base text-center font-medium bg-gray-100 rounded'>{element.name}</p>
                        </div>
                    </>
                })
            }
        </div>
    </div>
    )
}

export default Features