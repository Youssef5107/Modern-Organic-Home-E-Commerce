import { configureStore } from "@reduxjs/toolkit";
import toggleProductsInfoSlice from "../features/toggleProductsInfo/toggleProductsInfoSlice";

export const store = configureStore({
  reducer: {
    ProductsInfo: toggleProductsInfoSlice,
  },
});
