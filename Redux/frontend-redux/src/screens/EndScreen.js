import "./EndScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

// Components
import Product from "../components/Product";
import { getOrders as addToOrder } from "../redux/actions/orderAction";

const EndScreen = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const getOrders = useSelector((state) => state.order);
  const orders= getOrders;

  console.log(orders.orderItems.item.userId);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    // dispatch(addToOrder());
  }, [dispatch]);

  return (
    <div>
      <div class="loginForm">
        <div className="form-div">
          <form /*onSubmit={this.onSubmit} */>
            <h2 style={{ textAlign: "center" }}>This is your slip</h2>
            <div>
              <label>Customer ID</label>
              <div>
                <input
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue={orders.orderItems.item.userId}
                  variant="filled"
                />
              </div>
            </div>
            <div>
              <label>Address</label>
              <div>
                <input
                 disabled
                 id="filled-disabled"
                 label="Disabled"
                 defaultValue={orders.orderItems.item.address}
                 variant="filled"
                />
              </div>
            </div>
            <div>
              <label>Price</label>
              <div>
                <input
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue={orders.orderItems.item.amount}
                  variant="filled"
                />
              </div>
            </div>
            
            <div style={{ display: "flex" }}>
              <div>
                <button className="buy-button" onClick={() => history.push("/")}>
                  Back TO Home
                </button>
              </div>
              <div>
                <Link to="/login">
                  <button className="buy-button">Logout</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
