import {
  atom,
  selector,
  waitForAll,
  selectorFamily,
  useRecoilValueLoadable,
  useRecoilState,
  useRecoilValue,
  DefaultValue
} from "recoil";
import React from 'react'
import axios from "axios";
import { productById, cartState,productListState } from "./atom";
import { getProductDetails } from "../recoil/productState";
// import { useRecoilValueLoadable } from "recoil";

const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }
  onSet(newValue => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const listP = selector({
  key: "listP",
  get: async () => {
    try {
      const response = await axios.get(`/api/products`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  effects_UNSTABLE: [
    localStorageEffect('list_state')
],
});

export const getProductbyId = selector({
  key: "getProductbyId",
  get: async ({ get }) => {
    try {
      //const [product, setProduct] = useRecoilState (productById)
      const product = get(productById);
      const id = [product.productId]
      const response = await axios.get(`/api/products/${id}`);
      // console.log(response.data);
      return response.data
    } catch (error) {
      throw error;
    }
  },
});

export const totalQty = selector({
  key: "totalQty",
  get: ({ get }) => {
    const totalQty = get(cartState).reduce(
      (qty, item) => Number(item.qty) + qty,0
    );
    return totalQty;
  },
});

export const DetailsWithoutSuspense = () => {
  const { state, contents } = useRecoilValueLoadable(getProductbyId);
  //console.log(state);
  //console.log(contents)
  
  switch (state) {
    case "hasValue":
      return state
    case "loading":
      return console.log("Loading...Hello");
    case "hasError":
       throw <div>{contents.message}</div>;
    default:
      return "";
  }
};


export const bomb = selector({
  key: "bomb",
  get: ({ get }) => {
    try{
      const totalQty = get(productListState)
      const response = axios.get(`/api/products`);
      return totalQty;
    }catch (error){
      throw console.error();
    }
  },
});


export const getProductbyId2 = selector({
  key: "getProductbyId2",
  get: ({ get }) => {
    try {
      //const [product, setProduct] = useRecoilState (productById)
      const product = get(productById);
      const id = [product.productId]
      const response = axios.get(`/api/products/${id}`);
      //console.log(response.data);
      return product
    } catch (error) {
      throw error;
    }
  },
});