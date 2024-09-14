import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import "../Style/Button.css"





const Button = () => {
  return (
    <button className="btn" >
      <a href="">
        Order Now
        <GoArrowUpRight />
      </a>
    </button>
  );
};

export default Button;
