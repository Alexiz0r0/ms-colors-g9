import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Store } from "./Store.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Store />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
