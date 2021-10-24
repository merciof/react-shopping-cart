import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

import { formatNumber } from "../../helpers/utils";

function ProductItem({ product }) {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <>
      <p>{product.name}</p>
      <h3>{formatNumber(product.price)}</h3>

      {isInCart(product) && (
        <button onClick={() => increase(product)}>Add more</button>
      )}

      {!isInCart(product) && (
        <button onClick={() => addProduct(product)}>Add to cart</button>
      )}
    </>
  );
}

export default ProductItem;
