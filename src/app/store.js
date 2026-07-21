import { configureStore } from "@reduxjs/toolkit";
import togglreFavoritesReducer from "../features/togglreFavorites";

export const store = configureStore({
  reducer: {
    togglreFavorites: togglreFavoritesReducer,
  },
});
