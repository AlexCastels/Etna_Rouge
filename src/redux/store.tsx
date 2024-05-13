import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import contentfulSlice from "./slices/contentfulSlice";

export const store = configureStore({
  reducer: { product: productSlice,cart: cartSlice, contentful: contentfulSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
