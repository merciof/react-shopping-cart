import React from "react";

import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon
} from "../../components/icons";

function CartItem({ product }) {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <div>
      <div>
        {/* <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "50px" }}
          src={product.photo}
        /> */}
      </div>
      <div>
        <h5>{product.name}</h5>
        <p>Price: {formatNumber(product.price)} </p>
      </div>
      <div>
        <p>Qty: {product.quantity}</p>
      </div>
      <div>
        <button onClick={() => increase(product)}>
          <PlusCircleIcon width={"20px"} />
        </button>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)}>
            <MinusCircleIcon width={"20px"} />
          </button>
        )}

        {product.quantity === 1 && (
          <button onClick={() => removeProduct(product)}>
            <TrashIcon width={"20px"} />
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItem;
