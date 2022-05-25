import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import AdminRow from "./AdminRow";

const ManageAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }


  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-10">Manage Admin: {users.length}</h2>
      <div className="overflow-x-auto mx-10 my-6">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <AdminRow 
              key={user._id} 
              user={user} 
              refetch={refetch}></AdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdmin;
