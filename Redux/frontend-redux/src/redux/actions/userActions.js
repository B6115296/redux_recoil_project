import * as actionTypes from "../constants/userConstants";
import axios from "axios";

export const addUserDetails = (email) => async (dispatch) => {

      console.log(email)
  
      dispatch({
        type: actionTypes.ADD_TO_AUTH,
        payload: email,
      });
  };

  export const removeFromAuth = (email) => (dispatch, getState) => {

    console.log(email)
    dispatch({
        type: actionTypes.REMOVE_FROM_AUTH,
        payload: email,
    })
}