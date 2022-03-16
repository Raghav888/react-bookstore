import axios from "axios";
import React from "react";
import { useReducer, createContext, useContext, useEffect } from "react";
import { productListReducer } from "../utils/productListReducer";

const ProductContext = createContext([]);
const api = "/api/products";

const ProductProvider = ({ children }) => {
  const [productListstate, productListdispatch] = useReducer(
    productListReducer,
    { productList: [] }
  );
  console.log(productListstate.productList);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(api);
        productListdispatch({
          type: "ADD_PRODUCT_LIST",
          payload: { value: response.data.products },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productListstate }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductList = () => useContext(ProductContext);

export { useProductList, ProductProvider };
