import React from "react";
import { Link, useHistory } from "react-router-dom";
import '../components/Signin.css'
import axios from "axios";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addUserDetails } from '../redux/actions/userActions';

import { useAlert } from 'react-alert'

export const Signin = ({ match}) => {
  const alert = useAlert()

  const dispatch = useDispatch();
    
  const getUser = useSelector((state) => state.user);
  const { loadings, errors, userss } = getUser;
  
  
  let history = useHistory();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: String,
    password: String,
    /*  currentUser: null,
    message: "", */
  });
  
  const [getuser, setGetuser] = useState();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const addToOrderHandler = (products, amount) => {
  //   dispatch(addToOrder( users, products, amount, address));

  //   console.log(products);
  //   console.log(amount);
  // };
  const showAlert = () => {
    alert.show('Oh look, Please fill your address เข้าใจมั้ย')
  }

  const onSubmit = async(e) =>  {
    e.preventDefault();
     console.log(user);

    //  const email = "Test2@gmail.com"
    //  const password = "123456"

    const email = (user.email).toString()
    const password = (user.password).toString()

    console.log(email, password)
    // console.log(emaill, passwordd)

     const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/signin/login",
        { email, password},
        config
      )

      localStorage.setItem("authToken", data.token);
      console.log("Yahu")
      console.log(data)
      dispatch(addUserDetails(data));
      history.push("/")

      
    } catch (error) {
      
      setError(error.response.data.error);
      setTimeout(() => {
        
        setError("");
        
      }, 5000);
      
    }

    
      /*   .then((res) => {
        if (res.ok) {
          history.push("/home");
        }
      }) */
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data.email);
      //   setSuccess(true);
      //   setTimeout(() => {
      //     setSuccess(false);
      //     console.log("Yeah")
      //     // history.push("/home");
      //   }, 500);
      //   sessionStorage.setItem("email", data.email);
      //   sessionStorage.setItem("fname", data.first_name);
      //   sessionStorage.setItem("lname", data.last_name);
      // })
      // .catch((err) => {
      //   console.log(err);
      //   setError(true);
      //   setTimeout(() => {
      //     setError(false);
      //   }, 3000);
      // });
  };
  

  return (
    <div>
      <div class="loginForm">
        <div className="form-div">
          <form /*onSubmit={this.onSubmit} */>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <div>
              <label>Email</label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={onChange}
                />
              </div>
            </div>

            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div>
                <button className="buy-button" onClick={onSubmit} >
                  Login
                </button>
              </div>
              <div>
                <Link to="/register">
                  <button className="buy-button">Register</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
