import { configureStore } from "@reduxjs/toolkit";
import toggleProductsInfoSlice from "../features/togglreFavorites/toggleProductsInfoSlice";

export const store = configureStore({
  reducer: {
    ProductsInfo: toggleProductsInfoSlice,
  },
});
