import { useRecoilState } from "recoil";
import { cartState } from "./atom";
import React from "react";
import { getProductbyId } from "./selector";
import { useRecoilValueLoadable } from "recoil";
// Utility functions

const cloneIndex = (items, _id) => ({
  clone: items.map((product) => ({ ...product })),
  index: items.findIndex((product) => product._id === _id)
});

export const AddToCart = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (product, amount) => {
    const { clone, index } = cloneIndex(products, product._id);

    if (index !== -1) {
      clone[index].qty = amount ;
      setProducts(clone);
    } else {
      setProducts([...clone, { ...product, qty: amount }]);
    }

    if (products.error) {
      throw products.error;
    }
  }
};

export const RemoveFromCart = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (_id) => {
    setProducts(products.filter((item) => item._id !== _id));
  };
};

export const DetailsCartState = () => {
  const { state, contents } = useRecoilValueLoadable(cartState);
  //console.log(state);
  //console.log(contents)

  switch (state) {
    case "hasValue":
      return state
    case "loading":
      return console.log("Loading...Cart");
    case "hasError":
      throw <div>{contents.message}</div>;
    default:
      return "";
  }
};
