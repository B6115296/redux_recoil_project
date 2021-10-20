import "./CartScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { addToOrder } from "../redux/actions/orderAction";

import { useAlert } from 'react-alert'
import { positions, transitions, types } from 'react-alert'

const CartScreen = () => {
  
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // const { products } = cart;

  

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, item) => Number(item.price * item.qty) + price,
      0
    );
  };

  const [styleErrorAddress, setStyleErrorAddress] = useState();

  const getUser = useSelector((state) => state.user);
    const users  = getUser.user.item
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

    let [usern, setUsern] = useState(getUser.user)
    console.log(usern)

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const showAlert = () => {
        alert.show('Oh look, Please fill your address เข้าใจมั้ย')
  }

  const addToOrderHandler = (products, amount) => {
    if(address != ""){
      dispatch(addToOrder( users, products, amount, address));
      history.push('/end')
    }else{
      showAlert()
    }
    

    console.log(products);
    console.log(amount);
  };
  console.log(cartItems);
  console.log(cart);

  const alert = useAlert()
  

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div className="cartscreen__info">
          
          <div className="form-group">
            <label htmlFor="address">Address: </label>
            
            <input
              style={styleErrorAddress}
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
            {"Address is required"}
            
          </span>
          </div>
        </div>

        <div>
          <button
            onClick={() =>
              addToOrderHandler(cart.cartItems, getCartSubTotal().toFixed(2))
            }
          >
            <Link type="button">Proceed To Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
