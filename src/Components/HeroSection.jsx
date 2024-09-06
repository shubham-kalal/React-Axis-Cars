import React from "react";
import Button from "./Button";
import '../Style/Herosection.css'

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="heading">
            <h1>Axis Model <span>3</span> </h1>
          </div>
          <div className="hero-button">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
