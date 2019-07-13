import React, { useReducer } from "react";
import cartReducer from "./cartReducer";
import CartContext from "./cartContext";
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from "../types";

const LoaderState = props => {
  const [state, dispatch] = useReducer(cartReducer, []);

  //Add item to cart
  const addCartItem = item =>
    dispatch({ type: ADD_ITEM, payload: { ...item } });

  //Remove item to cart
  const removeCartItem = index =>
    dispatch({ type: REMOVE_ITEM, payload: index });

  //Clear items in cart
  const clearCartItems = () => dispatch({ type: CLEAR_ITEMS });

  const contextPayload = {
    cartItems: [...state],
    addCartItem,
    removeCartItem,
    clearCartItems
  };

  return (
    <CartContext.Provider value={contextPayload}>
      {props.children}
    </CartContext.Provider>
  );
};

export default LoaderState;
