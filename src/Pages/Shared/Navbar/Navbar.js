import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const menuItems = (
    <>
      <li className="border-r">
        <Link to="/">Home</Link>
      </li>
      <li className="border-r">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="border-r">
        <Link to="/products">Products</Link>
      </li>
      <li className="border-r">
        <Link to="/NewProducts">New</Link>
      </li>
      {/* <div class="dropdown border-r">
        <label tabIndex="0" className="btn btn-ghost font-bold text-lg m-1">
          Products
        </label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
          <Link to="/products">Featured</Link>
          </li>
          <li>
          <Link to="/NewProducts">New</Link>
          </li>
        </ul>
      </div> */}
      {user && (
        <li className="border-r">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ml-auto">
        <ul className="menu menu-horizontal font-bold text-md p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
