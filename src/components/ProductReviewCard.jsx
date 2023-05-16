import React from "react";
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ price, image, name, review }) => {
  return (
    <div className="review_card">
      <img src={image} alt="review_image" />
      <p>{review}</p>
      <div className="review_det">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductReviewCard;
