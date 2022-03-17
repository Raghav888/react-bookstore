import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import MockMan from "mockman-js";
import { Home } from "./pages/landing/Home";
import { ProductListing } from "./pages/productListing/ProductListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductListing />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
