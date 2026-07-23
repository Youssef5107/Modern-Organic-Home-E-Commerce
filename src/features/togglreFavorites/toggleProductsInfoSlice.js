import { createSlice, current } from "@reduxjs/toolkit";

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

const initialState = {
  favoriteIds: loadFavorites(),
  addedIds: loadAddedProducts(),
  quantities: loadStoredQuantities(),
  selectedCardId: null,
};

export const toggleProductsInfoSlice = createSlice({
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
    toggleAddedProducts: (state, action) => {
      const productId = action.payload;
      const index = state.addedIds.indexOf(productId);

      if (state.addedIds.includes(productId)) {
        state.addedIds.splice(index, 1);
      } else {
        state.addedIds.push(productId);
      }

      localStorage.setItem("added_products", JSON.stringify(state.addedIds));
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] || 1) + 1;
      localStorage.setItem(
        "cartQuantities",
        JSON.stringify(current(state.quantities)),
      );
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
    },
    viewCardDetails: (state, action) => {
      const productId = action.payload;
      state.selectedCardId = productId;
    },
  },
});

export const {
  toggleFavorite,
  toggleAddedProducts,
  incrementQuantity,
  decrementQuantity,
  viewCardDetails,
} = toggleProductsInfoSlice.actions;

export default toggleProductsInfoSlice.reducer;
