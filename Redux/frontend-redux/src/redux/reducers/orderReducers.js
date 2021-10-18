import * as actionType from "../constants/orderConstants";

export const orderReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_ORDER:
      const item = action.payload;

      const exitItem = state.cartItems.find((x) => x.product === item.product);

      if (exitItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === exitItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
