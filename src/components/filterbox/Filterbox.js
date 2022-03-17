import React from "react";
import { useCategory } from "../../context/category-context";
import "./filterbox.css";
export const Filterbox = () => {
  const { category } = useCategory();
  return (
    <div className="filter-main">
      <div className="main-box">
        <div className="side-bar">
          <div className="filter-title">
            <h3>Filter</h3>
            <div className="clear-filter">Clear</div>
          </div>
          <div className="category-head">
            <h3>Category</h3>
          </div>
          <div className="category-sub">
            <form>
              {category.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="book-filter">
                      <input type="checkbox" id="love" />
                      <label className="label-box" for="love">
                        {item.categoryName}
                      </label>
                    </div>
                  </div>
                );
              })}
            </form>
          </div>
          {/* <!-- Price --> */}
          <div className="category-head">
            <h3>Price</h3>
          </div>
          <div className="min-max">
            <small>Min</small>
            <small>Max</small>
          </div>
          <div className="input-box">
            <input
              className="mantra-textbox-classic mantra-highlight-box"
              placeholder=" $499"
            />
            <p>_</p>
            <input
              className="mantra-textbox-classic mantra-highlight-box"
              placeholder=" $499"
            />
          </div>

          {/* <!-- Filter by Rating --> */}
          <div className="category-head">
            <h3>Ratings</h3>
          </div>
          <div className="category-sub">
            <div className="rating-filter">
              <input type="radio" id="star4" name="star" />
              <label className="label-box" for="star4">
                4 Stars & above
              </label>
            </div>
            <div className="rating-filter">
              <input type="radio" id="star3" name="star" />
              <label className="label-box" for="star3">
                3 Stars & above
              </label>
            </div>
            <div className="rating-filter">
              <input type="radio" id="star2" name="star" />
              <label className="label-box" for="star2">
                2 Stars & above
              </label>
            </div>
            <div className="rating-filter">
              <input type="radio" id="star1" name="star" />
              <label className="label-box" for="star1">
                1 Stars & above
              </label>
            </div>
          </div>

          {/* <!-- Sort by price --> */}
          <div className="category-head">
            <h3>Sort by</h3>
          </div>

          <div className="category-sub">
            <div className="price-sort">
              <input type="radio" id="sort-high" name="sort" />
              <label className="label-box" for="sort-high">
                Price: Low to High
              </label>
            </div>
            <div className="price-sort">
              <input type="radio" id="sort-low" name="sort" />
              <label className="label-box" for="sort-low">
                Price: High to Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
