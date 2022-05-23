import React from "react";
import capability from "../../../images/capability.jpg";

const Capabilities = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={capability} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div className="mx-10">
          <h1 className="text-5xl font-bold">Our Capabilities</h1>
          <p className="py-6 text-justify">
            We Are Restocking as Quickly as Possible. Come Back 7/30 to Order, more of These Flavors Inspired by the Places You Call Home!We are
            always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging
            trends, market needs and combining them with our technical and creative expertise
          </p>
          <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0 rounded-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
