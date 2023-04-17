import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList: []
};

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.wishList.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size);
            if(itemIndex >= 0){
                state.wishList[itemIndex].quantity += 1;
            }else{

                state.wishList.push(action.payload);
            }
        },

        removeProduct: (state, action) => {
            const nextProduct = state.wishList.filter((item) => (item.id !== action.payload.id || item.color !== action.payload.color || item.size !== action.payload.size));

            state.wishList = nextProduct;
        },
    }
});

export const {addProduct, removeProduct} = wishListSlice.actions;
export default wishListSlice.reducer;