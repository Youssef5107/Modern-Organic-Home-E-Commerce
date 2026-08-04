import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { logoutUser } from "../apis/apiSlice";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4003/api";

const persistList = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem("favorite_products");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const loadAddedProducts = () => {
  try {
    const added = localStorage.getItem("added_products");
    return added ? JSON.parse(added) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const loadStoredQuantities = () => {
  try {
    const saved = localStorage.getItem("cartQuantities");
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Failed to load quantities from localStorage:", error);
    return {};
  }
};

const emitPreferencesChanged = (state) => {
  if (typeof window !== "undefined") {
    const detail = {
      favoriteIds: [...state.favoriteIds],
      addedIds: [...state.addedIds],
      quantities: { ...state.quantities },
    };
    queueMicrotask(() => {
      window.dispatchEvent(
        new CustomEvent("user-preferences-changed", { detail }),
      );
    });
  }
};

const initialState = {
  favoriteIds: loadFavorites(),
  addedIds: loadAddedProducts(),
  quantities: loadStoredQuantities(),
  selectedCardId: null,
  isSyncing: false,
  notification: null,
};

export const loadUserPreferences = createAsyncThunk(
  "products/loadPreferences",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        return rejectWithValue("not-authenticated");
      }

      const response = await fetch(`${API_BASE_URL}/auth/preferences`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unable to load saved items");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to load saved items");
    }
  },
);

export const syncUserPreferences = createAsyncThunk(
  "products/syncPreferences",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        return rejectWithValue("not-authenticated");
      }

      const state = getState();
      const persistedFavorites = loadFavorites();
      const persistedAddedIds = loadAddedProducts();
      const persistedQuantities = loadStoredQuantities();
      const favoriteIds = state.ProductsInfo.favoriteIds ?? persistedFavorites;
      const addedIds = state.ProductsInfo.addedIds ?? persistedAddedIds;
      const quantities = state.ProductsInfo.quantities ?? persistedQuantities;
      const cartItems = addedIds.map((productId) => ({
        productId,
        quantity: quantities[productId] || 1,
      }));

      const response = await fetch(`${API_BASE_URL}/auth/sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          favorites: favoriteIds,
          cartItems,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Unable to save your preferences");
      }

      return true;
    } catch (error) {
      return rejectWithValue(
        error.message || "Unable to save your preferences",
      );
    }
  },
);

export const toggleProductsInfoSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const index = state.favoriteIds.indexOf(productId);

      if (index > -1) {
        state.favoriteIds.splice(index, 1);
        state.notification = {
          message: "Product has been removed from saved items successfully",
          id: Date.now(),
        };
      } else {
        state.favoriteIds.push(productId);
        state.notification = {
          message: "Product has been added to saved items successfully",
          id: Date.now(),
        };
      }

      persistList("favorite_products", state.favoriteIds);
      emitPreferencesChanged(state);
    },
    toggleAddedProducts: (state, action) => {
      const productId = action.payload;
      const index = state.addedIds.indexOf(productId);

      if (index > -1) {
        state.addedIds.splice(index, 1);
        state.notification = {
          message: "Product has been removed from cart successfully",
          id: Date.now(),
        };
      } else {
        state.addedIds.push(productId);
        state.notification = {
          message: "Product has been added to cart successfully",
          id: Date.now(),
        };
      }

      persistList("added_products", state.addedIds);
      emitPreferencesChanged(state);
    },
    hideNotification: (state) => {
      state.notification = null;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] || 1) + 1;
      localStorage.setItem(
        "cartQuantities",
        JSON.stringify(current(state.quantities)),
      );
      emitPreferencesChanged(state);
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      if (state.quantities[id] > 1) {
        state.quantities[id] -= 1;
        localStorage.setItem(
          "cartQuantities",
          JSON.stringify(current(state.quantities)),
        );
      }
      emitPreferencesChanged(state);
    },
    setUserPreferences: (state, action) => {
      const {
        favorites = [],
        cartItems = [],
        quantities = {},
      } = action.payload || {};
      state.favoriteIds = favorites;
      state.addedIds = cartItems.map((item) => item.productId);
      state.quantities = quantities;
      persistList("favorite_products", state.favoriteIds);
      persistList("added_products", state.addedIds);
      localStorage.setItem("cartQuantities", JSON.stringify(state.quantities));
    },
    viewCardDetails: (state, action) => {
      const productId = action.payload;
      state.selectedCardId = productId;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadUserPreferences.pending, (state) => {
        state.isSyncing = true;
      })
      .addCase(loadUserPreferences.fulfilled, (state, action) => {
        state.isSyncing = false;
        const favorites = Array.isArray(action.payload?.favorites)
          ? action.payload.favorites
          : [];
        const cartItems = Array.isArray(action.payload?.cartItems)
          ? action.payload.cartItems
          : [];

        state.favoriteIds = favorites;
        state.addedIds = cartItems
          .map((item) => item?.productId)
          .filter(Boolean);
        state.quantities = cartItems.reduce((acc, item) => {
          if (item?.productId) acc[item.productId] = item.quantity || 1;
          return acc;
        }, {});

        persistList("favorite_products", state.favoriteIds);
        persistList("added_products", state.addedIds);
        localStorage.setItem(
          "cartQuantities",
          JSON.stringify(state.quantities),
        );
      })
      .addCase(logoutUser, (state) => {
        state.favoriteIds = [];
        state.addedIds = [];
        state.quantities = {};
        state.selectedCardId = null;
        if (typeof window !== "undefined") {
          localStorage.removeItem("favorite_products");
          localStorage.removeItem("added_products");
          localStorage.removeItem("cartQuantities");
        }
      })
      .addCase(loadUserPreferences.rejected, (state) => {
        state.isSyncing = false;
      })
      .addCase(syncUserPreferences.pending, (state) => {
        state.isSyncing = true;
      })
      .addCase(syncUserPreferences.fulfilled, (state) => {
        state.isSyncing = false;
      })
      .addCase(syncUserPreferences.rejected, (state) => {
        state.isSyncing = false;
      });
  },
});

export const {
  toggleFavorite,
  toggleAddedProducts,
  incrementQuantity,
  decrementQuantity,
  setUserPreferences,
  viewCardDetails,
  hideNotification,
} = toggleProductsInfoSlice.actions;

export default toggleProductsInfoSlice.reducer;
