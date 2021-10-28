import React, { useContext } from "react";
import { Link } from "react-router-dom";

import CartProducts from "./CartProducts";
import Header from "../../components/shared/header";
import { CartContext } from "../../contexts/CartContextProvider";

function Cart() {
  const {
    total,
    cartItems = [],
    itemCount,
    clearCart,
    checkout,
    handleCheckout
  } = useContext(CartContext);

  return (
    <>
      <Header />

      <p>Esta é a página do carrinho.</p>

      {cartItems.length > 0 ? <CartProducts /> : <div>Your cart is empty</div>}

      {checkout && (
        <>
          <p>Checkout successfull</p>
          <Link to="/">BUY MORE</Link>
        </>
      )}

      {cartItems.length > 0 && (
        <>
          <p>Total Items</p>
          <h4>{itemCount}</h4>
          <p>Total Payment</p>
          <h3>{total}</h3>

          <hr />

          <button type="button" onClick={handleCheckout}>
            CHECKOUT
          </button>
          <button type="button" onClick={clearCart}>
            CLEAR
          </button>
        </>
      )}
    </>
  );
}

export default Cart;
