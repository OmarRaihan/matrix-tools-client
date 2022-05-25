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
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-20">My Orders: {orders?.length}</h2>
      <div className="overflow-x-auto mx-10 my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.name}</td>
                <td>{a.address}</td>
                <td>{a.phone}</td>
                <td>{a.quantity}</td>
                {/* <td>
                  <Link to={`/dashboard/${a._id}`}>
                    <button className="btn btn-xs btn-success">Pay</button>
                  </Link>
                  {a.price && a.paid && <span className="text-success">Paid</span>}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
