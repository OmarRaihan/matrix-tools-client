import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import OrderModal from "../OrderModal/OrderModal";
import "../Purchase/Purchase.css";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/product/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [purchaseId]);

  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold mb-10">Purchase Item</h2>
      <div className="purchase-card card border rounded-none mx-auto p-2">
        <figure className="px-2 pt-2">
          <img className="rounded w-72" src={product?.img} alt="" />
        </figure>
        <div className="card-body items-center text-center info">
          <h4 className="text-2xl font-bold" style={{ color: "#36AE7C" }}>
            {product?.name}
          </h4>
          <p>{product?.description}</p>
          <h5>Price: ${product?.price}</h5>
          <h6>Available Quantity: {product?.availableQuantity}</h6>
          <h6>Minimum Order: {product?.minimumOrder}</h6>
        </div>

        <div className="text-center text-md bg-green-200 mb-10 p-2">
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
        </div>
        <div className="card-actions mx-auto mb-4">
          <label
            onClick={() => setOrder(product)}
            style={{ backgroundColor: "#36AE7C" }}
            htmlFor="order-modal"
            className="btn border-0 rounded-none text-lg w-64"
          >
            Order
          </label>
        </div>
      </div>
      {order && <OrderModal order={order} />}
    </div>
  );
};

export default Purchase;
