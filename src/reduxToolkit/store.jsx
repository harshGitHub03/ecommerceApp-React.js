import { configureStore } from "@reduxjs/toolkit";

// slice reducers & state
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";

const store=configureStore({
    reducer:{
        productsData:productsSlice,
        cartData:cartSlice
    }
})

export default store