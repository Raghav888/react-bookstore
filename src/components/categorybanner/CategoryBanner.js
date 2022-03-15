import React from "react"
import { useCategory } from "../../context/category-context"
import "./CategoryBaner.css"


export function CategoryBaner(){

const {category}=useCategory();


    return(
        <div>
        <div className="product-line">
        {
category.map((item)=>{
    return( 
        <div key={item.id} className="display-image">
            <a href="##">
                <img className="book-type" src={item.categoryImage} alt="love-story" />
                <div className="centered">{item.categoryName}</div>
            </a>
        </div>)
})}
    
        
    </div>
    <div className="baner">
        <a href="##">
            <img className="baner-image" src="./assets/baner.png" alt="baner-book" />
        </a>
    </div>
    </div>
    )
}