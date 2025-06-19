import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui";
import { authSlice } from "./auth";
import { productSlice } from "./product";
import { sidebarSlice } from "./sidebar";
import { ordenesSlice } from "./ordenes";
import { preListaSlice } from "./preLista";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    product: productSlice.reducer,
    sidebar: sidebarSlice.reducer,
    ordenes: ordenesSlice.reducer,
    preLista: preListaSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
