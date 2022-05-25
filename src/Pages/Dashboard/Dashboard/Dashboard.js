import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add Review</Link>
          </li>
          {/* {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
              </li>
            </>
          )} */}
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
            {/* <Link to="/dashboard/payment">Payment</Link> */}
          </li>
          <li>
            <Link to="/dashboard/manageOrders">Manage Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard/makeAdmin">Make Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/manageProducts">Manage Products</Link>
            {/* <Link to="/dashboard/payment">Payment</Link> */}
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;