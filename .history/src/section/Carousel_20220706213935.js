import React from "react";
import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: true,
  };
  return (
    <div className="Carousel">
      <div Carousel__Content>
        <Slider {...settings}>
          <div>1</div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
