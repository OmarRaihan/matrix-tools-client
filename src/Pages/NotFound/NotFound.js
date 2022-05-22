import React from "react";
import { useNavigate } from "react-router-dom";
import "../NotFound/NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div style={{ height: "100vh" }} className="error-page text-center my-5">
      <h1 className="headline">That Page Doesn't Exist!!</h1>
      <p>Sorry, the page you are looking for cannot be found.</p>

      <div className="mt-2 mb-5">
        <h1 className="error">404</h1>
      </div>
      <div>
        <button style={{backgroundColor: "#36AE7C"}} className="btn w-64 text-white text-decoration-none border-0 pe-auto px-5" onClick={handleHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
