import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { fetchApi } from './reduxToolkit/slices/productsSlice'

import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import ErrorComp from './Components/Error&LoadingComponents/ErrorComp'
import ScrollToTop from './Components/ScrollToTop'
import LoginContainer from './Components/LoginPages.jsx/LoginContainer'

// react popup / toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch()

  // show||hide sign up form
  const [signUpDisplay, setSignUpDisplay] = useState(false)

  useEffect(() => {
    dispatch(fetchApi())
  }, [])

  return (
    <>
      {/* React docs component to NavLink page from top*/}
      <ScrollToTop />

      <Navbar setSignUpDisplay={setSignUpDisplay} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/shop/:productId' element={<ProductDetail />}></Route>

        {/* error page if trying to access wrong page on URL */}
        <Route path='*' element={<ErrorComp />}></Route>

      </Routes>
      <Footer />

      {/* show||hide signUp  */}
      {signUpDisplay ===true? <LoginContainer setSignUpDisplay={setSignUpDisplay} /> : null}


      <ToastContainer
          position="bottom-left"
          autoClose={800}
          hideProgressBar={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
          transition:Bounce
        />
    </>
  )
}

export default App