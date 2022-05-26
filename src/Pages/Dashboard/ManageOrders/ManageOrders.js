import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const ManageOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/order", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setManageOrders(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-20">Orders: {manageOrders?.length}</h2>
      <div className="overflow-x-auto mx-10 my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageOrders?.map((m, index) => (
              <tr key={m._id}>
                <th>{index + 1}</th>
                <td>{m.name}</td>
                <td>{m.address}</td>
                <td>{m.phone}</td>
                <td>{m.quantity}</td>
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

export default ManageOrders;
