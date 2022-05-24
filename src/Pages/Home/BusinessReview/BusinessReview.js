import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../BusinessReview/BusinessReview.css";

const BusinessReview = () => {
  return (
    <div className="container mx-auto items-center mt-20">
      <h1 style={{ color: "#36AE7C" }} className="text-center text-5xl font-bold">
        OUR BUSINESS TRUST
      </h1>
      <p className="text-center text-lg font-bold">TRY TO UNDERSTAND USERS EXPERIENCES</p>
      <div className="business-review-card flex items-center mt-40">
        <div className="card w-auto">
          <p style={{ color: "#36AE7C" }} className="text-center text-5xl">
            {/* <i className="fa-solid fa-font-awesome"></i> */}
            <i className="fa-solid fa-globe"></i>
          </p>
          <div className="card-body">
            <h2 className="text-center text-4xl font-bold">65</h2>
            <p style={{ color: "#36AE7C" }} className="text-center text-lg">
              Countries
            </p>
          </div>
        </div>

        <div className="card w-auto">
          <p style={{ color: "#36AE7C" }} className="text-center text-5xl">
            <i className="fa-solid fa-computer"></i>
          </p>
          <div className="card-body">
            <h2 className="text-center text-4xl font-bold">530+</h2>
            <p style={{ color: "#36AE7C" }} className="text-center text-lg">
              Complete Projects
            </p>
          </div>
        </div>

        <div className="card w-auto">
          <p style={{ color: "#36AE7C" }} className="text-center text-5xl">
            <i className="fa-solid fa-people-group"></i>
          </p>
          <div className="card-body">
            <h2 className="text-center text-4xl font-bold">300+</h2>
            <p style={{ color: "#36AE7C" }} className="text-center text-lg">
              Happy Clients
            </p>
          </div>
        </div>

        <div className="card-auto">
          <p style={{ color: "#36AE7C" }} className="text-center text-5xl">
            <i className="fa-solid fa-comment-dots"></i>
          </p>
          <div className="card-body">
            <h2 className="text-center text-4xl font-bold">425+</h2>
            <p style={{ color: "#36AE7C" }} className="text-center text-lg">
              Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessReview;
