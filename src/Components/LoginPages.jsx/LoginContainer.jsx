import React, { useEffect, useRef, useState } from 'react'

function Login({ setSignUpDisplay }) {

    // toggle sign in || sign up form
    const [loginType, setLoginType] = useState("signUp")

    //password hide show
    const [passwordEye, setPasswordEye] = useState(false)

    // hide scrollbar while sign up diplay
    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        return () => document.body.style.overflowY = 'auto'
    })

    //to close signUp form on click outside area
    const ref = useRef()
    useEffect(() => {
        const handler = (e) => {
            if (e.target === ref.current) {
                console.log("sf");
                
                setSignUpDisplay(false)
            }
            console.log(e.target)
        }
        document.body.addEventListener('click', handler)

        return () => document.body.removeEventListener('click', handler)
    })


    return (
        <div ref={ref} className='bg-[#000000a1] flex justify-center items-center fixed top-0 left-0 z-20 w-screen h-screen'>
            <div className='bg-black flex flex-col h-fit items-center gap-6 max-md:py-[3rem] py-[4rem] text-white max-sm:px-[2.5rem] max-md:px-[3.5rem] px-[3.6vw]'>
                {loginType === "signUp" ?
                    <h4 className='text-4xl self-start font-medium'>Welcome <br />Back!</h4>
                    : <h4 className='text-4xl self-start font-medium'>Create an <br />Account</h4>
                }
                <form action="" className='flex flex-col gap-4 max-sm:w-[60vw] max-md:w-[45vw] max-lg:w-[36vw] w-[20rem]'>
                    <label className={`${loginType == "signUp" ? 'hidden' : ''} bg-[#333333] flex items-center inline p-2 `}>
                        <i class="fa-solid fa-user h-4"></i>
                        <input type="text" className='bg-[#333333] w-full  outline-none px-2' placeholder='Name' />
                    </label>
                    <label className='bg-[#333333] inline flex items-center w-full p-2 '>
                        <i class="fa-solid fa-user h-4"></i>
                        <input type="text" className='bg-[#333333] w-full outline-none px-2' placeholder='Username or email' />
                    </label>
                    <label className='bg-[#333333] inline-block w-full p-2 select-none flex items-center'>
                        <i class="fa-solid fa-user h-4"></i>
                        <input type={`${passwordEye ? 'text' : 'password'}`} className='bg-[#333333] w-full outline-none px-2 ' placeholder='password' />
                        <i onClick={() => setPasswordEye(passwordEye ? false : true)} class={`${passwordEye ? "fa-regular fa-eye-slash" : "fa-regular fa-eye mx-[1px]"} p-1`}></i>
                    </label>

                    <button className='bg-gray-400 text-lg font-medium text-black py-1 mt-2'>{loginType=="signUp"?'sign Up':'sign In'}</button>
                </form>

                {/* dosen't have a account */}
                <div className='text-sm flex w-full justify-between'>
                    <span className='text-gray-400'>{loginType=="signUp"?"dosen't have an account?":'already have an account?'}</span>
                    <p onClick={() => loginType == "signIn" ? setLoginType("signUp") : setLoginType("signIn")} className='text-red-700  hover:text-red-600 underline'>{loginType=="signUp"?'sign Up':'sign In'}</p>
                </div>

                {/* sign up with google facebool apple */}
                <hr className='border-gray-600 border w-3/5 mt-2' />
                <div className='flex items-center gap-3 flex-col'>
                    <h4 className='text-sm'>or sign up with</h4>
                    <div className='text-xl flex items-center gap-4'>
                        <i class="fa-brands fa-google  h-[2rem]  w-[2rem] flex items-center justify-center rounded-full hover:bg-gray-700 active:bg-gray-600 bg-gray-600 "></i>
                        <i class="fa-brands fa-facebook-f h-[2rem] w-[2rem] flex  items-center justify-center rounded-full hover:bg-gray-700 active:bg-gray-600 bg-gray-600 "></i>
                        <i class="fa-brands fa-apple  h-[2rem] w-[2rem] flex items-center justify-center rounded-full hover:bg-gray-700 active:bg-gray-600 bg-gray-600 "></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login