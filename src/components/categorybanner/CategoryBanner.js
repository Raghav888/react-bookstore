import React from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../../context/category-context";
import "./CategoryBanner.css";

export function CategoryBanner() {
  const { category } = useCategory();

  return (
    <div>
      <div className="product-line">
        {category.map((item) => {
          return (
            <div key={item.id} className="display-image">
              <a href="##">
                <img
                  className="book-type"
                  src={item.categoryImage}
                  alt="love-story"
                />
                <div className="centered">{item.categoryName}</div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="baner">
        <Link to="/productlist">
          <img
            className="baner-image"
            src="./assets/baner.png"
            alt="baner-book"
          />
        </Link>
      </div>
    </div>
  );
}
