import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./context/category-context";
import { ProductProvider } from "./context/product-listing-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
