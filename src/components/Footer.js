import React from "react";
import "../styles/Footer.css";
import mes1 from "../imag/mes1.png";
import mes2 from "../imag/mes2.png";
import mes3 from "../imag/mes3.png";
import mas4 from "../imag/mas4.png";
import mas5 from "../imag/mas5.png";
import mas6 from "../imag/mas6.png";
import mas7 from "../imag/mas7.png";
import mas8 from "../imag/mas8.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="gastaway">
        <div className="gastaway_title">Gastaway</div>
        <div className="gastaway-icon">
          <img src={mes1} />
          <img src={mes2} />
          <img src={mes3} />
        </div>
      </div>
      <div className="link-left">
        <a href="#" className="link">
          Home
        </a>
        <a href="#" className="link">
          About
        </a>
        <a href="#" className="link">
          Episodes
        </a>
        <a href="#" className="link">
          Contact
        </a>
      </div>
      <div className="link-right">
        <a href="#" className="link">
          Style Guide
        </a>
        <a href="#" className="link">
          Instructions
        </a>
        <a href="#" className="link">
          Changelog
        </a>
        <a href="#" className="link">
          Credit
        </a>
        <a href="#" className="link">
          Powered by Webflow
        </a>
        <a href="#" className="link">
          Licenses
        </a>
      </div>
      <div className="music-icon">
        <img src={mas4} className="mas" />
        <img src={mas5} className="mas" />
        <img src={mas6} className="mas" />
        <img src={mas7} className="mas" />
        <img src={mas8} className="mas" />
      </div>
    </div>
  );
};

export default Footer;
