import React from "react";
import useProducts from "../../Hooks/useProducts/useProducts";
import Product from "../Product/Product";
import '../Products/Products.css'

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="container">
      <h2 className="text-center mt-5">Products: ({products.length})</h2>
      <hr className="w-75 mx-auto" />
      <div className="products-container mb-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
