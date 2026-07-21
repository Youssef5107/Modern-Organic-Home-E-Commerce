import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem("favorite_products");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const initialState = {
  favoriteIds: loadFavorites(),
};

export const togglreFavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const index = state.favoriteIds.indexOf(productId);

      if (state.favoriteIds.includes(productId)) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(productId);
      }

      localStorage.setItem(
        "favorite_products",
        JSON.stringify(state.favoriteIds),
      );
    },
  },
});

export const { toggleFavorite } = togglreFavoritesSlice.actions;

export default togglreFavoritesSlice.reducer;
