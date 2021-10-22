import React from "react";
import { Link } from "react-router-dom";

import CartProducts from "./CartProducts";
import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

function Cart() {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout
  } = useCart();

  return (
    <Layout title="Cart" description="This is the Cart page">
      <h1>Carrinho</h1>
      <p>Esta é a página do carrinho.</p>

      {cartItems.length > 0 ? <CartProducts /> : <div>Your cart is empty</div>}

      {checkout && (
        <div>
          <p>Checkout successfull</p>
          <Link to="/">BUY MORE</Link>
        </div>
      )}

      {cartItems.length > 0 && (
        <>
          <p>Total Items</p>
          <h4>{itemCount}</h4>
          <p>Total Payment</p>
          <h3>{formatNumber(total)}</h3>

          <hr />

          <button type="button" onClick={handleCheckout}>
            CHECKOUT
          </button>
          <button type="button" onClick={clearCart}>
            CLEAR
          </button>
        </>
      )}
    </Layout>
  );
}

export default Cart;
