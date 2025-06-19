import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Listar productos
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setProducts: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // Crear producto
    addProduct: (state, { payload }) => {
      state.isLoading = false;
      state.products.push(payload);
    },

    // Editar producto
    updateProduct: (state, { payload }) => {
      state.isLoading = false;
      const index = state.products.findIndex((p) => p.id === payload.id);
      if (index !== -1) {
        state.products[index] = payload;
      }
    },

    // Eliminar producto
    deleteProduct: (state, { payload }) => {
      state.isLoading = false;
      state.products = state.products.filter((p) => p.id !== payload);
    },
  },
});

export const {
  startLoading,
  setProducts,
  setError,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;
