import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import '../components/Register.css'
import axios from "axios";

import { userIdState } from "../recoil/atom";

export const Register = () => {

    let history = useHistory();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [styleErrorName, setStyleErrorName] = useState();
    const [styleErrorEmail, setStyleErrorEmail] = useState();
    const [styleErrorPassword, setStyleErrorPassword] = useState();
    const [styleErrorAddress, setStyleErrorAddress] = useState();
    const [styleErrorBirthday, setStyleErrorBirthday] = useState();
    const [styleErrorPhone, setStyleErrorPhone] = useState();

        
    const onSubmit = async (data) => {
        console.log(data);

      const name = String(data.Name)
    const email = data.Email
    const password = data.Password
    const birthday = data.Birthday
    const address = data.Address
    const phone = data.Phone
        

        console.log(name);

        const { user } = await axios.post(`api/users/`, {
          name, email, password, birthday, address, phone
        },history.push("/login"))
          .catch((err) => {
            console.log("can't register ");
            console.log(err);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);
          });
          console.log(user)
      };
      

      // Name, Email, Password, Birthday, Address, Phone
    
      useEffect(() => {
        if (errors.Name) {
          setStyleErrorName();
        } else {
          setStyleErrorName();
        }
        if (errors.Email) {
          setStyleErrorEmail();
        } else {
          setStyleErrorEmail();
        }
        if (errors.Password) {
          setStyleErrorPassword();
        } else {
          setStyleErrorPassword();
        }
        if (errors.Address) {
          setStyleErrorAddress();
        } else {
          setStyleErrorAddress();
        }
        if (errors.Phone) {
          setStyleErrorPhone();
        } else {
          setStyleErrorPhone();
        }
        if (errors.Birthday) {
          setStyleErrorBirthday();
        } else {
          setStyleErrorBirthday();
        }
      });
    
    return (
        <div className="Page">
            <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            style={styleErrorName}
            {...register("Name", {
              required: "Required",
              maxLength: 30,
              pattern: {
                value: "^[A-Za-z\\s]+$",
                message: "invalid Name",
              },
            })}
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
            {errors.Name && errors.Name?.message}
          </span>
        </div>
        <div>
          <label>Email</label>
          <input
            style={styleErrorEmail}
            {...register("Email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
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
            {errors.Email && errors.Email?.message}
          </span>
        </div>
        <div>
          <label>Password</label>
          <input
            style={styleErrorPassword}
            type="password"
            {...register("Password", {
              required: "Required",
              minLength: 4,
              pattern: {
                message: "invalid Name",
              },
            })}
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
            {errors.Password && "Password is required"}
          </span>
        </div>
        <div>
          <label>Birthday</label>
          <input
            style={styleErrorBirthday}
            type="date"
            {...register("Birthday", {
              required: true,
            })}
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
            {errors.Birthday && "Birthday is required"}
          </span>
        </div>
        <div>
          <label>Address</label>
          <input
            style={styleErrorAddress}
            {...register("Address", {
              required: "Required",
              minLength: 4,
              maxLength: 100,
              pattern: {
                message: "invalid Name",
              },
            })}
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
            {errors.Address && "Address is required"}
          </span>
        </div>
        <div>
          <label>Phone</label>
          <input
            style={styleErrorPhone}
            {...register("Phone", {
              required: "Required",
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: "Phone number must be 10 digit. E.g. 0123456789",
              },
            })}
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
            {errors.Phone && "Phone is required"}
          </span>
        </div>

        <input type="submit" />
      </form>
        </div>
    )
}
