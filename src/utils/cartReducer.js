export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload.value],
        cartcount: state.cartcount + 1,
      };
    default:
      return state;
  }
};
