import React from "react";
import "../../Shared/Footer/Footer.css";
import footer from "../../../images/Footer-3.jpg";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer style={{ background: `url(${footer})`, backgroundSize: "cover" }} className="p-10">
      <div className="footer mt-20 ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
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
