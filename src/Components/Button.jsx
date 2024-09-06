import React from "react";
import { GoArrowUpRight } from "react-icons/go";


const button = {
  padding: "22.35px 27.94px",
  fontWeight: "300",
  fontSize: "26.82px",
  lineHeight: "26.94px",
  textAlign: "center",
  color: "white",
  background: "#FFFFFF26",
  border: "1px solid white",
};



const Button = () => {
  return (
    <button className="btn" style={button}>
      <a href="">
        Order Now
        <GoArrowUpRight />
      </a>
    </button>
  );
};

export default Button;
