import React, { useContext } from "react";

import CartItem from "./CartItem";
import { CartContext } from "../../contexts/CartContextProvider";

function CartProducts() {
  const { cartItems, increase, decrease, removeProduct } = useContext(
    CartContext
  );

  return (
    <>
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          increase={increase}
          decrease={decrease}
          removeProduct={removeProduct}
        />
      ))}
    </>
  );
}

export default CartProducts;
