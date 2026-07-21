import { configureStore } from "@reduxjs/toolkit";
import toggleProductsInfoSlice from "../features/togglreFavorites/togglreFavoritesSlice";

export const store = configureStore({
  reducer: {
    ProductsInfo: toggleProductsInfoSlice,
  },
});
