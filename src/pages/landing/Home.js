import React from "react";
import { CategoryBaner } from "../../components/categorybanner/CategoryBanner";
import { Navbar } from "../../components/shared/navbar/Navbar";
export function  Home(){
    return(
        <div>
        <Navbar/>
        <CategoryBaner/>
        </div>
    )
}