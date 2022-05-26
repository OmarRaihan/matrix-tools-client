import React from "react";
import "../../Shared/Footer/Footer.css";
import footer from "../../../images/Footer-5.jpg";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer style={{ backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #36AE7C 74%", backgroundSize: "cover" }} className="p-10">
      <div className="footer mt-20 ">
        <div>
          <span className="footer-title">Products</span>
          <a className="link link-hover">Drills</a>
          <a className="link link-hover">Saws</a>
          <a className="link link-hover">Hammers</a>
          <a className="link link-hover">Pliers</a>
          <a className="link link-hover">Wrenches</a>
          <a className="link link-hover">Chisels</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="mt-10 mb-6 text-center">
        <p>Copyright © {year} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
