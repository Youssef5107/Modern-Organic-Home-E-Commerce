import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUserPreferences } from "../toggleProductsInfo/toggleProductsInfoSlice";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4003/api";

const getStoredAuthUser = () => {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("authUser") || "null");
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getStoredToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("authToken");
};

export const loginApi = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "Invalid credentials");
      }

      if (typeof window !== "undefined" && data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authUser", JSON.stringify(data.user || null));
      }

      dispatch(loadUserPreferences());

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to sign in right now.");
    }
  },
);

export const registerApi = createAsyncThunk(
  "auth/register",
  async ({ userName, email, password }, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
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

      if (!response.ok) {
        return rejectWithValue(data.message || "Unable to create your account");
      }

      if (typeof window !== "undefined" && data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authUser", JSON.stringify(data.user || null));
      }

      dispatch(loadUserPreferences());

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to create your account");
    }
  },
);

const initialState = {
  response: null,
  isLoading: false,
  error: null,
  successMessage: null,
  token: getStoredToken(),
  user: getStoredAuthUser(),
  isLogoutConfirmOpen: false,
};

export const authModalApi = createSlice({
  name: "api",
  initialState,
  reducers: {
    changeResult: (state) => {
      state.response = "changed";
    },
    clearAuthFeedback: (state) => {
      state.error = null;
      state.successMessage = null;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.successMessage = null;
      state.response = null;
      state.isLogoutConfirmOpen = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
      }
    },
    setLogoutConfirmOpen: (state, action) => {
      state.isLogoutConfirmOpen = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(loginApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        state.error = null;
        state.successMessage = "Signed in successfully";
        state.token = action.payload.token || null;
        state.user = action.payload.user || null;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Unable to sign in right now.";
      })
      .addCase(registerApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(registerApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        state.error = null;
        state.successMessage =
          action.payload.message || "Account created successfully";
        state.token = action.payload.token || null;
        state.user = action.payload.user || null;
      })
      .addCase(registerApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Unable to create your account";
      });
  },
});

export const {
  changeResult,
  clearAuthFeedback,
  logoutUser,
  setLogoutConfirmOpen,
} = authModalApi.actions;

export default authModalApi.reducer;
