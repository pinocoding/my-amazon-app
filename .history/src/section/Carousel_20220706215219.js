import React from "react";
import ReactDOM from "react-dom";
import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Carousel">
      <div Carousel__Content>
        <Slider {...settings}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
