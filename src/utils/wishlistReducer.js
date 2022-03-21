export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistData: [...state.wishlistData, action.payload.value],
        wishlistcount: state.wishlistcount + 1,
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistData: state.wishlistData.filter(
          (item) => item._id !== action.payload.value
        ),
        wishlistcount: state.wishlistcount - 1,
      };
    default:
      return state;
  }
};
