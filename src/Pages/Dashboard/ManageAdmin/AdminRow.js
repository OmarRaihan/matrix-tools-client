import React from "react";
import { toast } from "react-toastify";

const AdminRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  return (
    <tr key={user._id}>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button style={{ backgroundColor: "#36AE7C" }} onClick={makeAdmin} className="btn btn-sm rounded-full border-0">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0 btn-sm rounded-full">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
