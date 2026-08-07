import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFetchCount: 0,
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading(state) {
      state.activeFetchCount += 1;
      state.isLoading = true;
    },
    stopLoading(state) {
      if (state.activeFetchCount > 0) {
        state.activeFetchCount -= 1;
      }
      if (state.activeFetchCount === 0) {
        state.isLoading = false;
      }
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
