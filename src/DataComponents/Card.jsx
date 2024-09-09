import React from "react";

const Card = ({ Facilityprops }) => {
  return (
    <>
      {Facilityprops.map((Facilitymap) => (
        <div key={Facilitymap.id} style={cardContent}>
          <h4 style={number}>{Facilitymap.Number}</h4>
          <h5 style={heading}>{Facilitymap.heading}</h5>
          <p style={content}> {Facilitymap.content}</p>
        </div>
      ))}
    </>
  );
};

export default Card;

const number = {
  fontSize: "40px",
  fontWeight: "400",
  lineHeight: "46px",
  color: "#A5EFFF",
};

const heading = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  marginTop: "8px",
  marginBottom: "8px",
};

const content = {
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "24px",
};
const cardContent = {
  width: "100%",
  maxWidth: "310px",
};
