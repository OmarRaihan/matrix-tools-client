import React, { useEffect, useState } from "react";
import NewProduct from "../NewProduct/NewProduct";
import "../NewProducts/NewProducts.css";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch("newArrival.json")
      .then((res) => res.json())
      .then((data) => setNewProducts(data));
  }, []);
  return (
    <div className="grid">
      <div className="container mx-auto my-10">
        <h2 className="text-center text-5xl font-bold mt-5 mb-10">NEW PRODUCTS</h2>
        <div className="new-products-container mb-5">
          {newProducts.map((newProduct) => (
            <NewProduct key={newProduct.id} newProduct={newProduct}></NewProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
