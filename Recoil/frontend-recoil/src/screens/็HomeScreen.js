import "./HomeScreen.css";
import React from 'react'
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { listP } from "../recoil/selector";
// Components
import Product from "../components/Product";
import { useState, useEffect } from "react";
import { productListState, userIdState } from "../recoil/atom";
import { Link, useHistory } from "react-router-dom";

const HomeScreen = () => {

    const [x,setX] = useRecoilState(productListState)
    setX(2)

    // console.log(x)
    const list = useRecoilValue(listP)
    const products = list.data
    console.log(products)

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
    <div className="homescreen">
      <h2 className="homescreen__title">Recoil Product</h2>
      <div className="homescreen__products">
        {
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              countInStock={product.countInStock}
            />
          ))
        }
      </div>
    </div>
  );
};

export default HomeScreen;
