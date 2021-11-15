import * as actionTypes from'../constants/orderConstants';
import axios from 'axios'
import { useState } from 'react';

export const addToOrder = (userId,products, amount,address) => async (dispatch, getState) => {
    const { data } = await axios.post(`/api/orders/`, {
        userId, products ,amount,address
      },)
    console.log(data)
    dispatch({
      type: actionTypes.ADD_TO_ORDER,
      payload: {
          userId: data.userId,
          products: data.products,
          amount: data.amount,
          address: data.address,
      }
  })
    console.log(userId,products, amount,address)
}

