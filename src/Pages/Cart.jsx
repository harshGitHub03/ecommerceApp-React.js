import React, { useState } from 'react'
import CartComponent from '../Components/CartComponents/CartComponent'
import { useSelector } from 'react-redux'
import CartEmpty from '../Components/CartComponents/CartEmpty'
import Payment from '../Components/CartComponents/PaymentComp/Payment'

function Cart() {
    const { cart } = useSelector(state => state.cartData)

    // show/hide payment module
    const [paymentDisplay, setPaymentDisplay] = useState(false)

    return (<>
        {
            // cart component || cart empty component
            cart.length > 0 ? <CartComponent setPaymentDisplay={setPaymentDisplay} /> : <CartEmpty />
        }

        {/* payment component Show || hide */}
        {paymentDisplay ? < Payment setPaymentDisplay={setPaymentDisplay}/> : ""}
    </>)
}

export default Cart