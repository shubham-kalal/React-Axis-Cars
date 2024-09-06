import React from "react";
import Navbtn from "./Navbtn";
import  "../Style/Header.css"
 
// const BtnStyle =
const Header = () => {
  return (
    <div>
      <div className="main-header">
        <div className="container">
          <header>
            <div className="logo">
              <img src="./logo.png" alt="" />
            </div>
            <ul>
              <li>
                <a href="">Vehicles</a>
              </li>
              <li>
                <a href="">Design</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
            <div className="header-btn">

            <Navbtn/>

            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
