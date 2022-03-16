export const productListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_LIST":
      return { ...state, productList: action.payload.value };

    default:
      return state;
  }
};
