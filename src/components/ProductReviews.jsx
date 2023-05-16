import React from "react";
import ProductReviewCard from "./ProductReviewCard.jsx";
import "../styles/ProductReview.css";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="productReview">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
