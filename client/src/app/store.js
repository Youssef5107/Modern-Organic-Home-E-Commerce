import { configureStore } from "@reduxjs/toolkit";
import toggleProductsInfoSlice from "../features/toggleProductsInfo/toggleProductsInfoSlice";
import { authModalApi } from "../features/apis/apiSlice";

export const store = configureStore({
  reducer: {
    ProductsInfo: toggleProductsInfoSlice,
    apis: authModalApi,
  },
});
