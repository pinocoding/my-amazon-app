import React from "react";

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
    <div className="Carousel__Content">
      <Slider {...settings}>
        <div className="Carousel__Container">
          <img
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg
            "
            alt=""
          />
        </div>
        <div>1</div>
        <div>1</div>
      </Slider>
    </div>
  );
}

export default Carousel;
