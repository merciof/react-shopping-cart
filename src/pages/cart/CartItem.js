import React from "react";

function CartItem({ product, increase, decrease, removeProduct }) {
  return (
    <>
      <h5>{product.name}</h5>
      <p>Preço: {product.price} </p>

      <p>Quantidade: {product.quantity}</p>

      <button onClick={() => increase(product)}>+</button>

      {product.quantity > 1 && (
        <button onClick={() => decrease(product)}>-</button>
      )}

      {product.quantity === 1 && (
        <button onClick={() => removeProduct(product)}>remover</button>
      )}
    </>
  );
}

export default CartItem;
