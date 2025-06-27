// components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} Prime College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
