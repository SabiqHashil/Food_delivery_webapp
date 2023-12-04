import React from "react";

const HProduct = ({ Image, Image2, Title, Description }) => {
  return (
    <div className="card shadow-sm">
      <img src={Image} alt="" />
      <div className="card-body d-flex">
        <img src={Image2} alt="" classNameName="w-25 h-25" />
        <p>
          <strong>{Title}</strong>
          <p>{Description}</p>
        </p>
      </div>
    </div>
  );
};

export default HProduct;
