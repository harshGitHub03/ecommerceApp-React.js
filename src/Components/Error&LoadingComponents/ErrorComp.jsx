import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComp() {
    return (
        <div className='h-[90vh] flex flex-col items-center justify-center gap-3 w-full'>
            <div className='text-[8rem] mb-4 w-full shadow-xl bg-gray-300 text-center'>
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h4 className='text-3xl text-red-700 font-medium'>404 NOTHING FOUND</h4>
            <p className='text-lg text-center'>Looks Like Webpage you're looking for <br />dosent exist!</p>
            <Link to='/' className='px-6 font-semibold rounded text-white hover:bg-[#16837b] active:bg-[#0c544f] py-2 bg-[#08726a]'>home</Link>
          </div>
    )
}

export default ErrorComp