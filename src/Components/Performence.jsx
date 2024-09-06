import React from "react";
import Button from "./Button";
import "../Style/Performrnce.css";

const Performence = () => {
  return (
    <>
      <div className="performence-main">
        
        <div className="container">
          <div className="performence-inner">
            <div className="content">
              <h2> Highly sought after </h2>
              <p>
                Collectors and enthusiasts due to their rarity, unique design,
                and exceptional <br /> performance capabilitie
              </p>
              <div className="performence-button">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performence;
