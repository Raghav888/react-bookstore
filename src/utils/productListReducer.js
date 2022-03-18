export const productListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_LIST":
      return { ...state, productList: action.payload.value };
    case "LOW":
      return {
        ...state,
        sortbyPrice: "low",
      };
    case "HIGH":
      return {
        ...state,
        sortbyPrice: "high",
      };
    case "MAX_PRICE":
      return {
        ...state,
        maxPrice: action.payload.value ? action.payload.value : 9999,
      };
    case "MIN_PRICE":
      return { ...state, minPrice: action.payload.value };
    case "RATING":
      return { ...state, ratingsort: action.payload.value };
    default:
      return state;
  }
};
