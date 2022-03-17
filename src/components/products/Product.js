import { useProductList } from "../../context/product-listing-context";
import React from "react";
import "./product.css";
export const Products = () => {
  const { productListstate } = useProductList();
  return (
    <div className="product-page">
      <div className="product-page-title">
        <h3>Showing All Products</h3>
      </div>
      {/* <!-- Listing --> */}
      <div className="book-card-holder">
        {productListstate.productList.map(
          ({
            _id,
            title,
            author,
            productImage,
            discountprice,
            orginalPrice,
          }) => {
            return (
              <div className="mantra-vertical-card card-holder">
                <div className="mantra-icon mantra-close-icon">
                  <i claclassNamess="fas fa-heart-circle" id="wishlist"></i>
                </div>
                <div className="mantra-card-holder-image-v">
                  <img
                    className="mantra-vert-image image-cover"
                    src={productImage}
                    alt="book-baner"
                  />
                </div>
                <div className="mantra-card-holder-text-vert">
                  <div className="mantra-card-holder-text-content">
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                    <div className="mantra-price-box">
                      <span className="mantra-discount">
                        Rs.{discountprice}
                      </span>
                      <span className="mantra-original">Rs.{orginalPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="mantra-card-btn button-add">
                  <button className="mantra-button mantra-primary-btn ">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
