import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";

function ProductItem({ product }) {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div>
      {/* <img
        style={{ display: "block", maxHeight: "200px" }}
        src={product.photo + "?v=" + product.id}
        alt=""
      /> */}
      <p>{product.name}</p>
      <h3>{formatNumber(product.price)}</h3>
      <div>
        <Link to="/">Details</Link>

        {isInCart(product) && (
          <button onClick={() => increase(product)}>Add more</button>
        )}

        {!isInCart(product) && (
          <button onClick={() => addProduct(product)}>Add to cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
