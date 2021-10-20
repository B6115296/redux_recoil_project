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
import { getProduct as listProduct } from "../redux/actions/productActions";

const EndScreen = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div>
      <div class="loginForm">
        <div className="form-div">
          <form /*onSubmit={this.onSubmit} */>
            <h2 style={{ textAlign: "center" }}>This is your slip</h2>
            <div>
              <label>Email</label>
              <div>
                <input
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
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
                 defaultValue="Hello World"
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
                  defaultValue="Hello World"
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
