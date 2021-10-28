import React, { useContext } from "react";

import ProductItem from "./ProductItem";
import Header from "../../components/shared/header";
import { ProductsContext } from "../../contexts/ProductsContextProvider";

function ProductsGrid() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Header />

      <div>{products.length} Produtos</div>

      <hr />

      {products.map((product) => (
        <>
          <ProductItem key={product.id} product={product} />
          <hr />
        </>
      ))}
    </>
  );
}

export default ProductsGrid;
