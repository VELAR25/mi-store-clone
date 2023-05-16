import React from "react";
import "../styles/StarProduct.css";

const StarProducts = ({ starProduct }) => {
  return (
    <div className="star_main">
      <div className="star_left">
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="phone" />
        </a>
      </div>

      <div className="star_right">
        <div className="star_right_top">
          <a href={starProduct[1].url}>
            <img src={starProduct[1].image} alt="phone" />
          </a>
          <a href={starProduct[2].url}>
            <img src={starProduct[2].image} alt="phone" />
          </a>
        </div>
        <div className="star_right_down">
          <a href={starProduct[3].url}>
            <img src={starProduct[3].image} alt="phone" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StarProducts;
