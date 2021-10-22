import React from "react";

import ProductItem from "./ProductItem";
import { useProducts } from "../../hooks/useProducts";

function ProductsGrid() {
  const { products } = useProducts();

  return (
    <>
      <div>{products.length} Products</div>

      <input type="text" placeholder="Search product" />

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsGrid;
