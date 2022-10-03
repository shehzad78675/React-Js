import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size);
            if(itemIndex >= 0){
                state.cart[itemIndex].quantity += 1;
            }else{

                state.cart.push(action.payload);
            }
        },

        removeProduct: (state, action) => {
            const nextProduct = state.cart.filter((item) => (item.id !== action.payload.id || item.color !== action.payload.color || item.size !== action.payload.size));

            state.cart = nextProduct;
        },

        increaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size);
            state.cart[itemIndex].quantity += 1;
        },

        decreaseQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color && item.size === action.payload.size);
            if(state.cart[itemIndex].quantity > 1){
                state.cart[itemIndex].quantity -= 1;
            }
        }
    }
});

export const {add, removeProduct, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;