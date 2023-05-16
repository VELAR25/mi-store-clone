import React from "react";
import Carousel from "react-bootstrap/Carousel";

// include this library to make carousel work properly
import "bootstrap/dist/css/bootstrap.min.css";

// for each Corousel.Item it will render it as a single page to make a slider their will be multiple Carousel.Item

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="First Slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
