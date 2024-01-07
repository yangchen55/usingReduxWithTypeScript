import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
// let name = "max";
// type N = typeof name;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
