import "./CartScreen.css";
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

// Components
import CartItem from "../components/CartItem";
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { cartState } from "../recoil/atom";

import { RemoveFromCart } from "../recoil/cartState";
import { AddToCart  } from "../recoil/cartState";

import { userIdState, orderState } from "../recoil/atom";
import { Link, useHistory } from "react-router-dom";

import alert from 'alert'

const CartScreen = () => {

  const addProduct = AddToCart()
  const cartItems = useRecoilValue(cartState);
  
  console.log(cartItems)

  const qtyChangeHandler = (id, qty) => {
    return (addProduct(id, qty))
  };


  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const showAlert = () => {
    alert('Oh look, Please fill your address เข้าใจมั้ย')
  }

  const username = useRecoilValue(userIdState)
  const [order, setOrders] = useRecoilState(orderState)
  const [address, setAddress] = useState("");
  const [errors, setError] = useState(false);
  const [styleErrorAddress, setStyleErrorAddress] = useState();

  const addToOrderHandler = (userId, products, amount, address) =>{

    // dispatch(addToOrder(username, products, amount, address));
    if(address != ""){
      const { data } = axios.post(`api/orders/`, {
        userId, products ,amount,address
        },)
        console.log(data)
        console.log(userId, products ,amount,address);
        setOrders([userId, products ,amount,address])
      history.push('/end')
    }else{
      // myFunction()
    }
    console.log(order);
  };
  console.log(username,address)
  
  console.log(cartItems);
  // console.log(cart);
  
  const users  = useRecoilValue(userIdState)
    console.log(users)
    let history = useHistory();

  useEffect(() => {
    if(users){
    }else if (users == ""){
      history.push('/login')
    }else{
      history.push('/login')
    }
  }, [users])
  
  
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()})</p>
          <p>${getCartSubTotal()}</p>
        </div>
        <div className="cartscreen__info">
          <div className="form-group">
            <label htmlFor="address">Address: </label>
            <input
              className="form-input"
              type="address"
              required
              id="address"
              placeholder="Address "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span
            style={{
              color: "red",
              display: "inline-block",
              textAlign: "left",
              float: "right",
              fontSize: "14px",
            }}
          >
            {address ? null : "Address is required"}
          </span>
          </div>
        </div>
        <div>
        <button
            onClick={() =>
              addToOrderHandler(username, cartItems, getCartSubTotal(), address)
              
            }
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
