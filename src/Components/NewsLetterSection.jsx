import React from 'react'

function NewsLetterSection() {
  return (
    <div className='bg-[url("/src/assets/homeAssets/newsLetterSection/newsLetter.png")] bg-[#373A40]  gap-3 max-lg:py-[10px] max-lg:pb-[13px] lg:h-[20vh] bg-[top_-200px_left_15vw] bg-no-repeat text-white flex flex-wrap items-center justify-between px-[6vw]'>
        <div>
        <h3 className=' max-md:text-2xl text-3xl font-bold'>Sign Up For Newsletters</h3>
        <p className='max-md:text-base mt-1 max-md:leading-5 text-lg font-medium gap-2'>Get E-mail updates about our latest shop and <span className='text-orange-400'>special offers.</span>  </p>
        </div>
        <form onSubmit={()=>alert("Welcome Subscriber!, we'll update you with our newsletters!")} className='flex'>
            <input type="text" required className='md:w-[22vw] px-3 round-left-top rounded-l py-2 outline-none text-black'/>
            <button className='px-6 font-semibold rounded-r hover:bg-[#16837b] active:bg-[#0c544f] py-2 bg-[#08726a]'>Sign Up</button>
        </form>
    </div>
  )
}

export default NewsLetterSection