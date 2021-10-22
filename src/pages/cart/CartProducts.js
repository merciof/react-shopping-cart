import React from "react";

import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart";

function CartProducts() {
  const { cartItems } = useCart();

  return (
    <>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default CartProducts;
