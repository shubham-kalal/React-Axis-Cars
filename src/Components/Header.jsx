import React, { useState } from "react";
import "../Style/Header.css";
import Navbtn from "./Navbtn";
import Menubtn from "./Menubtn";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="main-header">
        <div className="container">
          <header>
            <div className="logo">
              <img src="./logo.png" alt="" />
            </div>
            <ul className={menuOpen ? "nav-open" : ""}>
              <li>
                <a href="">Vehicles</a>
              </li>
              <li>
                <a href="">Design</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            <Navbtn />
            </ul>
            <div className="header-btn">
              <Menubtn onClick={handleMenuToggle} />
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;