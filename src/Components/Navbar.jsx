import React, { useEffect, useRef, useState } from 'react'
import logo from '/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar({ setSignUpDisplay }) {
    const { cart } = useSelector(state => state.cartData)

    // on responsive lg(900px) hamburger icon
    const [hamburger, setHamburger] = useState(false)

    // click navbar to close on mobile devices
    const ref = useRef()
    useEffect(() => {
        const handler = (e) => {
            // ref.cuurent.contains() to know if click is inside navBar to close
            if (ref.current.contains(e.target)) {
                setHamburger(false)
            }
        }
        document.body.addEventListener('click', handler)
    })

    return (<>
        <nav className='sticky top-0 flex justify-between w-full bg-[#E3E6F3] py-[17px] lg:px-[8vw] z-10 shadow-lg'>
            <Link to='/'><img src={logo} className='w-[150px] max-lg:ml-14 object-contain w-fit' alt="logo" /></Link>

            {/* use ref navbar to get ref.current.contain to get to know if clicked inside navbar / onNavlinks as well*/}
            <ul ref={ref} className={`${hamburger ? 'max-lg:top-[4rem]' : 'max-lg:top-[-490px]'} max-lg:shadow-xl max-lg:z-[-2] max-lg:duration-200 max-lg:bg-[#E3E6F3] max-lg:py-8 max-lg:pt-6 flex max-lg:flex-col max-lg:absolute max-lg:w-full  gap-7 items-center text-xl  font-medium`}>
                <NavLink to='/' className='relative hover:text-[#008000f5] px-[5px] py-[3px]'>Home</NavLink>
                <NavLink to='/shop' className='relative hover:text-[#008000f5] px-[5px] py-[3px]'>Shop</NavLink>
                <NavLink to='/blog' className='relative hover:text-[#008000f5] px-[5px] py-[3px]'>Blog</NavLink>
                <NavLink to='/about' className='relative hover:text-[#008000f5] px-[5px] py-[3px]'>About</NavLink>
                <NavLink to='/contact' className='relative hover:text-[#008000f5] px-[5px] py-[3px]'>Contact</NavLink>
                <button onClick={() => setSignUpDisplay(true)} className='relative lg:hidden  hover:text-blue-800 font-semibold text-xl'>Signup</button>
            </ul>
            <div className='max-lg:mr-14 flex items-center h-fit'>
                <button onClick={() => setSignUpDisplay(true)} className='relative max-lg:hidden hover:text-blue-800 font-semibold px-[5px] py-[3px] mr-2 text-xl'>Signup</button>
                <div className='text-3xl lg:hidden mr-2'>
                    {
                        hamburger ?
                            <i onClick={() => setHamburger(false)} className="fa-solid fa-xmark text-3xl p-2"></i>
                            : <i onClick={() => setHamburger(true)} className="fa-solid fa-bars p-2"></i>
                    }
                </div>
                <NavLink to='/cart' className="fa-solid fa-cart-shopping relative text-3xl hover:text-green-700 p-2 pl-1 ml-2"><p className={`w-fit bg-green-600 text-base absolute text-white  px-2 text-center rounded-full top-[-8px] ${cart.length > 0 ? 'flex' : 'hidden'} right-[-15px]`}>{cart.length}</p></NavLink>
            </div>
        </nav>
    </>)
}

export default Navbar