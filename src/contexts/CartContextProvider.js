import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "./CartReducer";

export const CartContext = createContext({});

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false
};

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const contextValues = {
    removeProduct: function removeProduct(payload) {
      return dispatch({ type: "REMOVE_ITEM", payload });
    },
    addProduct: function addProduct(payload) {
      return dispatch({ type: "ADD_ITEM", payload });
    },
    increase: function increase(payload) {
      return dispatch({ type: "INCREASE", payload });
    },
    decrease: function decrease(payload) {
      return dispatch({ type: "DECREASE", payload });
    },
    clearCart: function clearCart() {
      return dispatch({ type: "CLEAR" });
    },
    handleCheckout: function handleCheckout() {
      return dispatch({ type: "CHECKOUT" });
    },
    ...state
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
