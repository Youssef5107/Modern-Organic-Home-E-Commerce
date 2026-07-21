import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const togglreFavoritesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    togglreFavorites: (currentState, action) => {
      return action;
    },
  },
});

// Action creators are generated for each case reducer function
export const { togglreFavorites } = togglreFavoritesSlice.actions;

export default togglreFavoritesSlice.reducer;
