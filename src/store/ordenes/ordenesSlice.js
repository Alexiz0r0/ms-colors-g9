import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordenes: [],
  isLoading: false,
  errorMessage: null,
};

export const ordenesSlice = createSlice({
  name: "ordenes",
  initialState,
  reducers: {
    onStartLoading: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    onLoadOrdenes: (state, { payload }) => {
      state.ordenes = payload;
      state.isLoading = false;
    },
    onOrdenCreated: (state, { payload }) => {
      state.ordenes.push(payload);
      state.isLoading = false;
    },
    onError: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload || "Error desconocido";
    },
    onClearOrdenes: (state) => {
      state.ordenes = [];
      state.errorMessage = null;
      state.isLoading = false;
    },
  },
});

export const {
  onStartLoading,
  onLoadOrdenes,
  onOrdenCreated,
  onError,
  onClearOrdenes,
} = ordenesSlice.actions;
