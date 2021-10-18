import * as actionTypes from'../constants/orderConstants';
import axios from 'axios'
import { useState } from 'react';

export const addToOrder = (userId,products, amount,address) => async (dispatch, getState) => {
    const { data } = await axios.post(`/api/orders/`, {
        userId, products ,amount,address
      },)
    console.log(data)
    console.log(userId,products, amount,address)
}

