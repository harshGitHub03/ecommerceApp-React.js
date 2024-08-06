import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const api = await fetch('https://fakestoreapi.com/products')
    return api.json()
})

const productsData = createSlice({
    name: 'productData',
    initialState: {
        data: [],
        loading: true,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(fetchApi.rejected, (state, action) => {
            state.loading = false
            state.error = true
        });
        builder.addCase(fetchApi.pending, (state, action) => {
            state.loading = true
        })
    }
})

export default productsData.reducer