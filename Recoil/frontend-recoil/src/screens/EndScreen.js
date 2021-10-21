import "./EndScreen.css";
import React from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';

// Components
import Product from "../components/Product";
import { productListState, userIdState } from "../recoil/atom";
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";

const EndScreen = () => {

  let history = useHistory();

  // const getProducts = useSelector((state) => state.getProducts);
  // const { products, loading, error } = getProducts;
  const [users,setUsers] = useRecoilState(userIdState)
  const logoutHandler = () => {
    console.log(users)
    setUsers("")
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch]);

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
                <Link to="/login" onClick={logoutHandler}>
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
