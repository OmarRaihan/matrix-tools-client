import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order/${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  const handleCancel = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = orders.filter((order) => orders._id !== id);
            setOrders(remaining);
          }
        });
    }
    window.location.reload();
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-20">My Orders: {orders?.length}</h2>
      <div className="overflow-x-auto mx-10 my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>$ Price</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>
                  <button onClick={() => handleCancel(order._id)} style={{ backgroundColor: "#36AE7C" }} className="btn border-0 btn-sm rounded-full">
                    Cancel
                  </button>
                </td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0 btn-sm rounded-full px-5">
                        Pay
                      </button>
                    </Link>
                  )}
                  {order.price && order.paid && <span className="text-success">Paid</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
