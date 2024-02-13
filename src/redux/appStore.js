import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartProduct: [],
};
export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addToCartProduct: (state, action) => {
      state.cartProduct = [...state.cartProduct, action.payload];
    },
    emptyCart: (state) => {
      state.cartProduct = [];
    },
    deleteCartProduct: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (data) => data?.cartId != action.payload.cartId
      );
    },
    addCartProductQty: (state, action) => {
      let lang = state.cartProduct?.find((l) => l.id === action.payload.cartId);
      let index = state.cartProduct.findIndex(
        (l) => l.cartId === action.payload.cartId
      );

      lang = { ...action.payload, qty: action.payload.qty + 1 };

      state.cartProduct[index] = lang;
    },
    removeCartProductQty: (state, action) => {
      let lang = state.cartProduct?.find(
        (l) => l.cartId === action.payload.cartId
      );
      let index = state.cartProduct.findIndex(
        (l) => l.cartId === action.payload.cartId
      );
      lang = { ...action.payload, qty: action.payload.qty - 1 };
      state.cartProduct[index] = lang;
    },
  },
});
export const {
  addToCartProduct,
  emptyCart,
  deleteCartProduct,
  addCartProductQty,
  removeCartProductQty,
} = appSlice.actions;
export default appSlice.reducer;
