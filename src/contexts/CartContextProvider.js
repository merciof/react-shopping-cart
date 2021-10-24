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
    removeProduct: (payload) => dispatch({ type: "REMOVE_ITEM", payload }),
    addProduct: (payload) => dispatch({ type: "ADD_ITEM", payload }),
    increase: (payload) => dispatch({ type: "INCREASE", payload }),
    decrease: (payload) => dispatch({ type: "DECREASE", payload }),
    clearCart: () => dispatch({ type: "CLEAR" }),
    handleCheckout: () => dispatch({ type: "CHECKOUT" }),
    ...state
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
