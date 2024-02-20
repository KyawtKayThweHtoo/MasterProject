import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartProduct: [],
  isLoggedIn: false,
  loggedInUserData: null,
  userData: [
    {
      id: 1,
      username: "Jo March",
      email: "jomarch@gmail.com",
      password: "Apple@123",
    },
  ],
  messageSnackBar: {
    isOpen: false,
    severity: "success", // "success" || "error" || "warning" || "info"
    message: "",
  },
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
        (data) => data?.id != action.payload.id
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
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoggedInUserData: (state, action) => {
      state.loggedInUserData = action.payload;
    },
    registerUser: (state, action) => {
      if (state.userData.length) {
        state.userData = [...state.userData, action.payload];
      } else {
        state.userData = [action.payload];
      }
    },
    openSnackbar: (state, action) => {
      state.messageSnackBar.isOpen = true;
      state.messageSnackBar.severity = action.payload.severity;
      state.messageSnackBar.message = action.payload.message;
    },
    closeSnackBar: (state) => {
      state.messageSnackBar.isOpen = false;
    },
  },
});
export const {
  addToCartProduct,
  emptyCart,
  deleteCartProduct,
  addCartProductQty,
  removeCartProductQty,
  setIsLoggedIn,
  setLoggedInUserData,
  registerUser,
  closeSnackBar,
  openSnackbar,
} = appSlice.actions;
export default appSlice.reducer;
