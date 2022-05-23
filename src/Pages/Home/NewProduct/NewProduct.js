import React from "react";
import "../NewProduct/NewProduct.css";

const NewProduct = ({ newProduct }) => {
  const { img, name, price, availableQuantity, minimumOrder } = newProduct;
  return (
    <div>
      <div className="new-product-card card border rounded-none mx-auto p-2">
        <figure className="px-2 pt-2">
          <img className="rounded w-72" src={img} alt="" />
        </figure>
        <div className="card-body items-center text-center info">
          <h4 className="text-2xl font-bold" style={{ color: "#83BD75" }}>
            {name}
          </h4>
          <h5>Price: ${price}</h5>
          <h6>Quantity: {availableQuantity}</h6>
          <h6>Minimum Order: {minimumOrder}</h6>
          <div className="card-actions">
            <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0 rounded-none text-lg w-64">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
