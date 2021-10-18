import * as actionType from '../constants/userConstants'

const initialState = {
    user: [],
}
export const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_AUTH:
          const item = action.payload;
            return {
              ...state,
              user: [...state.user, item],
            };
          
        case actionType.REMOVE_FROM_AUTH:
          return {
              ...state,
              user: state.user.filter((x) => x.email !== action.payload)
          }
        default:
          return state;
      }
}