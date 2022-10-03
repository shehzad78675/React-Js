import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },

    reducers: {
        setProducts(state, action){
            state.data = action.payload
        },
    }
});


export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;