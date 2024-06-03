import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import contentfulSlice from "./slices/contentfulSlice";
import payformSlice from "./slices/payformSlice";

export const store = configureStore({
  reducer: { 
    product: productSlice,
    cart: cartSlice, 
    contentful: contentfulSlice,
    payformData : payformSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
