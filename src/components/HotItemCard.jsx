import React from "react";
import "../styles/HotItemCard.css";

const HotItemCard = ({ image, name, price, index }) => {
  return (
    <div className="Box">
      <img className="image" src={image} alt={`${index} product`} />
      <p className="name">{name}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default HotItemCard;
