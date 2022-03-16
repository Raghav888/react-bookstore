import React from "react";
import { Bestseller } from "../../components/bestsellerbanner/Bestseller";
import { CategoryBaner } from "../../components/categorybanner/CategoryBanner";
import { ScrollFooter } from "../../components/shared/footer/Scrollfooter";
import { Navbar } from "../../components/shared/navbar/Navbar";

import "./home.css";
export function Home() {
  return (
    <div>
      <Navbar />
      <CategoryBaner />
      <Bestseller />
      <ScrollFooter />
    </div>
  );
}
