import React from "react";
import useProducts from "../../Hooks/useProducts/useProducts";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";

const Home = () => {
    const [products] = useProducts()
  return (
    <div>
      <Banner />

      <div className="container mx-auto">
        <div className="mt-20 mb-5">
          <h5 className="text-center font-bold text-lg">FEATURED</h5>
          <h2 className="text-center font-bold text-5xl">PRODUCTS</h2>
          <hr className="w-75 mx-auto mt-3" />
        </div>
        <div className="products-container">
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
