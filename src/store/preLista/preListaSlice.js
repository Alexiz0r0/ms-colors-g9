import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const preListaSlice = createSlice({
  name: "preLista",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      // Evita duplicados por id
      const exists = state.items.find((item) => item.id === payload.id);
      if (!exists) {
        state.items.push(payload);
      }
    },
    removeItemById: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    clearList: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItemById, clearList } = preListaSlice.actions;
