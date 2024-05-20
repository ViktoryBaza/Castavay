import React from "react";
import "../styles/Header.css";

const Header = ({ scrollToHome, scrollToEpisodes, scrollToAbout, scrollToFooter}) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header_title">Castavay</div>
      </div>
      <div className="header-right">
      <a href="#" onClick={(e) => { e.preventDefault(); scrollToHome(); }}>
      Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToEpisodes(); }}>
          Episodes
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>
          About</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToFooter(); }}>
            Contact</a>
      </div>
    </div>
  );
};
export default Header;
