import { createSlice } from "@reduxjs/toolkit";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalAmount: 0
    },
    reducers: {
        addCart(state, action) {
            //find index returns index if found / else -1 if not found
            const find = state.cart.findIndex(item => item.id == action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
                toast('Item Quantity + 1')
            }
            else {
                const tempvar = { ...action.payload, quantity: 1 }
                state.cart.push(tempvar)

                toast("Added to cart!")
            }
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            toast('Removed from cart!')
        },
        decrementItem(state, action) {
            const index = state.cart.findIndex((item) => item.id === action.payload.id)
            state.cart[index].quantity -= 1
            toast('Quantity decreased -1')
        },
        incrementItem(state, action) {
            const index = state.cart.findIndex((item) => item.id === action.payload.id)
            state.cart[index].quantity += 1
            toast('Quantity Increased +1')
        },

        getTotal(state, action) {
            const totalAmount = state.cart.reduce((total, item) => {
                return total += item.quantity * item.price
            }, 0)

            state.totalAmount = totalAmount
        }
    }
})

export const { addCart, removeFromCart, decrementItem, incrementItem, getTotal } = cartSlice.actions
export default cartSlice.reducer