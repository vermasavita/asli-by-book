import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./hooks/context/filter-context";
import { CartProvider } from "./hooks/context/cart-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
