import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import wishListReducer from '../store/wishListSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer
  },
})