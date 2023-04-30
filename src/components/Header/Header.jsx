import React from "react";
import "./style.css";
import Logo from "assets/logo";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Logo/>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" placeholder="search" className="search-input"/>
        </div>
      </div>
    </div>
  );
}

export default Header;