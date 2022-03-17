import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import MockMan from "mockman-js";
import { Home } from "./pages/landing/Home";
import { ProductListing } from "./pages/productListing/ProductListing";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductListing />} />
        <Route path="/mockman" element={<MockMan />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
