import React from "react";
import { useNavigate } from "react-router-dom";
import "../Product/Product.css";

const Product = ({ product }) => {
  const { _id, img, name, description, price, availableQuantity, minimumOrder } = product;
  const navigate = useNavigate();

  const navigateToPurchase = (_id) =>{
    navigate(`/purchase/${_id}`)
  }
  return (
    <div>
      <div className="product-card card border rounded-none mx-auto p-2">
        <figure className="px-2 pt-2">
          <img className="rounded w-72" src={img} alt="" />
        </figure>
        <div className="card-body items-center text-center info">
          <h4 style={{ color: "#36AE7C" }} className="text-2xl font-bold">
            {name}
          </h4>
          <p>{description.slice(0, 70)}</p>
          <h5>Price: ${price}</h5>
          <h6>Quantity: {availableQuantity}</h6>
          <h6>Minimum Order: {minimumOrder}</h6>
          <div className="card-actions">
            <button onClick={() =>navigateToPurchase(_id)}
            style={{ backgroundColor: "#36AE7C" }} className="btn border-0 rounded-none text-lg w-64">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
