import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import "../Style/Navbtn.css";

const Navbtn = () => {
  return (
    <button className="nav-button">
      <a href="">
        contact us
        <GoArrowUpRight />
      </a>
    </button>
  );
};

export default Navbtn;