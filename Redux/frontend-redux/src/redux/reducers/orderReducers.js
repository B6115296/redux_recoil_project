import * as actionType from "../constants/orderConstants";


export const orderReducer = (state = { orderItems: [] }, action) => {

  switch (action.type) {
    case actionType.ADD_TO_ORDER:
      const item = action.payload;
        return {
          ...state,
          orderItems: {item},
        };
      
    case actionType.DELETE_FROM_ORDER:
      return {
        orderItems: []
          //user: state.user.filter((x) => x.email !== action.payload)
      }
    default:
      return state;
  }
};
