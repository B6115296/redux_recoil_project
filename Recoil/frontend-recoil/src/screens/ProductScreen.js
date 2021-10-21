import "./ProductScreen.css";

import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { productById, cartState } from "../recoil/atom";
import { useState, useEffect } from "react";
import { getProductbyId, DetailsWithoutSuspense } from "../recoil/selector";
import { AddToCart } from "../recoil/cartState";

import { productListState, userIdState } from "../recoil/atom";
import { Link, useHistory } from "react-router-dom";
const ProductScreen = () =>{

  const stateDetail = DetailsWithoutSuspense()

  const product = useRecoilValue(getProductbyId)
  console.log(product)
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const addProduct = AddToCart();
  // console.log(product)
  if(stateDetail === 'loading'){
    setLoading = true
  }else if(stateDetail === 'hasError'){
    setError = true
  }

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
    
    <div className="productscreen">
       {loading ? (
        <h2>Loading...Big Boys</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
      <div className="productscreen__left">
        <div className="left__image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="left__info">
          <p className="left__name">{product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price:
            <span>${product.price}</span>
          </p>
          <p>
            Status:
            <span>
              {Number(product.countInStock) > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            Qty
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </p>
          <p>
            <Link to={`/cart`}>
              <button
                type="button"
                onClick={() => addProduct(product, Number(qty))}
              >
                Add To Cart
              </button>
            </Link>
          </p>
        </div>
      </div>
      <div>
      </div>
      </>
      )}
    </div>
  );
};

export default ProductScreen;
