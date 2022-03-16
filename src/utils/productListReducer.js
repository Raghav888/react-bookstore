export const productListReducer = (state, action) => {
  switch (action.type) {
    case "STATE_UPDATE":
      return { ...state, productList: action.payload.value };

    default:
      return state;
  }
};
