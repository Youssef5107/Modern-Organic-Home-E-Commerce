import { configureStore } from "@reduxjs/toolkit";
import toggleProductsInfoSlice from "../features/toggleProductsInfo/toggleProductsInfoSlice";
import apisReducer from "../features/apis/apiSlice";
import loadingReducer from "../features/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    ProductsInfo: toggleProductsInfoSlice,
    apis: apisReducer,
    loading: loadingReducer,
  },
});
