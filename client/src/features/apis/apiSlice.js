import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginApi = createAsyncThunk(
  "registerApi",
  async ({ email, password }) => {
    const response = await fetch("http://localhost:4003/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
);

export const registerApi = createAsyncThunk(
  "registerApi",
  async ({ userName, email, password }) => {
    const response = await fetch("http://localhost:4003/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name: userName,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
);

const initialState = {
  response: null,
  isLoading: false,
};

export const authModalApi = createSlice({
  name: "api",
  initialState,
  reducers: {
    changeResult: (state) => {
      state.response = "changed";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerApi.pending, (state) => {
        console.log("the api is still being fetched");
        state.isLoading = true;
      })
      .addCase(registerApi.fulfilled, (state, action) => {
        console.log("the api has been fetched");
        state.isLoading = false;
        state.response = action.payload;
      });
  },
});

export const { changeResult } = authModalApi.actions;

export default authModalApi.reducer;
