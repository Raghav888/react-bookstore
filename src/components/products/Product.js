import { useProductList } from "../../context/product-listing-context";
import React from "react";
import "./product.css";
import { useCart } from "../../context/cart-context";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";

export const Products = () => {
  const { filterDataPrice, productListdispatch } = useProductList();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const addtoCart = (
    _id,
    title,
    author,
    productImage,
    discountprice,
    orginalPrice
  ) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        value: {
          _id,
          title,
          author,
          productImage,
          discountprice,
          orginalPrice,
          qty: 1,
          totalPrice: discountprice,
        },
      },
    });
    productListdispatch({ type: "CART_UPDATE", payload: { value: _id } });
  };

  const addtoWishlist = (
    _id,
    title,
    author,
    productImage,
    discountprice,
    orginalPrice,
    rating,
    cartAdded
  ) => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: {
        value: {
          _id,
          title,
          author,
          productImage,
          discountprice,
          orginalPrice,
          rating,
          cartAdded,
        },
      },
    });

    productListdispatch({ type: "WISHLIST_UPDATE", payload: { value: _id } });
  };

  const removefromWishlist = (_id) => {
    productListdispatch({ type: "WISHLIST_UPDATE", payload: { value: _id } });
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: {
        value: _id,
      },
    });
  };
  return (
    <div className="product-page">
      <div className="product-page-title">
        <h3 className="item-font">Showing Products</h3>
      </div>
      {/* <!-- Listing --> */}
      <div className="book-card-holder">
        {filterDataPrice.map(
          ({
            _id,
            title,
            author,
            productImage,
            discountprice,
            orginalPrice,
            rating,
            cartAdded,
            wishlistAdded,
          }) => {
            return (
              <div key={_id} className="mantra-vertical-card card-holder">
                <div className="mantra-icon mantra-close-icon">
                  {wishlistAdded ? (
                    <i
                      className="fas fa-heart-circle icon-size"
                      id="wishlist"
                      onClick={() => removefromWishlist(_id)}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-heart-circle icon-size"
                      onClick={() =>
                        addtoWishlist(
                          _id,
                          title,
                          author,
                          productImage,
                          discountprice,
                          orginalPrice,
                          rating,
                          cartAdded
                        )
                      }
                    ></i>
                  )}
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
                    <h2 className="item-font">{title}</h2>
                    <h3 className="item-font">{author}</h3>
                    <div className="mantra-price-box">
                      <span className="mantra-discount">
                        Rs.{discountprice}
                      </span>
                      <span className="mantra-original">Rs.{orginalPrice}</span>
                      <div className="rating-color item-font mantra-icon">
                        {rating}
                        <i
                          className="fa fa-star icon-font"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                {cartAdded ? (
                  <div className="mantra-card-btn button-add">
                    <Link to="/cart">
                      <button className="mantra-button mantra-primary-btn">
                        Go to Cart
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="mantra-card-btn button-add">
                    <button
                      className="mantra-button mantra-primary-btn"
                      onClick={() =>
                        addtoCart(
                          _id,
                          title,
                          author,
                          productImage,
                          discountprice,
                          orginalPrice
                        )
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
