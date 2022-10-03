import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.cartProducts.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (itemIndex >= 0) {
        state.cartProducts[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(tempProduct);
      }
    },

    removeProduct: (state, action) => {
      const nextCartProduct = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );
      state.cartProducts = nextCartProduct;
    },

    decreaseQuantity(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartProducts[itemIndex].cartQuantity > 1) {
        state.cartProducts[itemIndex].cartQuantity -= 1;
      } else {
        const nextCartProduct = state.cartProducts.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartProducts = nextCartProduct;
      }
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      // if(state.cartProducts[itemIndex].cartQuantity > 1){
      state.cartProducts[itemIndex].cartQuantity += 1;
      // }
    },
    updateProductSize(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartProducts[itemIndex].size = action.payload.size;
    },
    updateProductIndexIncrease(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== state.cartProducts.length - 1) {
        let tem = state.cartProducts[itemIndex + 1];
        state.cartProducts[itemIndex + 1] = state.cartProducts[itemIndex];
        state.cartProducts[itemIndex] = tem;
      }
    },
    updateProductIndexDecrease(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== 0) {
        let tem = state.cartProducts[itemIndex - 1];
        state.cartProducts[itemIndex - 1] = state.cartProducts[itemIndex];
        state.cartProducts[itemIndex] = tem;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
  updateProductSize,
  updateProductIndexIncrease,
  updateProductIndexDecrease,
} = cartSlice.actions;
export default cartSlice.reducer;
