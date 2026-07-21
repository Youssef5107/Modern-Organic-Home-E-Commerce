import { configureStore } from "@reduxjs/toolkit";
import togglreFavoritesReducer from "../features/togglreFavorites/togglreFavoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: togglreFavoritesReducer,
  },
});
