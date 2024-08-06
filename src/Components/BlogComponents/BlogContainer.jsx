import React from 'react'
import { blogAssets } from '../../assets/blogAssets/blogAssets/blogAssets'

function BlogContainer() {
    return (
        <div className='p-[7vw] max-lg:py-[5vw] max-lg:pb-[8vw] max-sm:pb-[9vw]'>
            <div className='flex flex-col items-center max-lg:gap-[7vw] gap-16'>
                {
                    blogAssets.map((e,i) => {
                        return <>
                            <div key={i} className='flex max-lg:flex-wrap  mt-[70px]  justify-center max-lg:gap-[1vw] gap-5'>
                                <div className='relative '>
                                    <h3 className='max-sm:text-[4rem] max-lg:text-[4.5rem] text-[5rem] font-bold absolute z-[-1] max-sm:top-[-70px] max-lg:top-[-79px] top-[-87px] text-gray-400'>{e.date}</h3>
                                    <img src={e.image} className='max-md:h-[45vw] max-lg:h-[25vw] h-[22vw]  max-md:w-[80vw] max-lg:w-[37vw] w-[36vw] object-cover object-center' alt="" />
                                </div>
                                <div className='content-center max-md:w-[80vw] w-[35vw]  max-lg:ml-[2vw]  max-md:ml-0 flex flex-col justify-center gap-3'>
                                    <h4 className='font-bold text-xl'>{e.title}</h4>
                                    <p className='max-md:text-base text-lg leading- line-clamp-3'>{e.discription}</p>
                                    <p className='flex text-sm gap-2 text-gray-800 items-center font-bold lg:text-lg'>CONTINUE READING <div className='max-sm:w-[3rem] max-md:w-[4rem] max-lg:w-[5rem] w-[6rem] h-[1.6px] bg-black'></div></p>
                                </div>
                            </div>
                        </>
                    })
                }
            </div >
        </div>
    )
}

export default BlogContainer