import React from "react";
import { Filterbox } from "../../components/filterbox/Filterbox";
import { Navbar } from "../../components/shared/navbar/Navbar";

export function ProductListing() {
  return (
    <div className="product-list-head">
      <Navbar />
      <Filterbox />
    </div>
  );
}
