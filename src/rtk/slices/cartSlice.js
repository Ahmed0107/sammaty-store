import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const foundedProduct = state.find(
        (product) => product.title === action.payload.title
      );

      if (foundedProduct) {
        alert("Product already there");
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.title !== action.payload.title);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
