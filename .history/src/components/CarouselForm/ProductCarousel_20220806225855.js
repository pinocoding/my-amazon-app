import React from "react";

import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductCarousel({ img }) {
  const settings = {
    dots: true,

    speed: 1500,

    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img alt="/#" src={img} />
        </div>
        <div>
          <img alt="/#" src={img} />
        </div>
        <div>
          <img alt="/#" src={img} />
        </div>
        <div>
          <img alt="/#" src={img} />
        </div>
        <div>
          <img alt="/#" src={img} />
        </div>
      </Slider>
    </div>
  );
}

export default ProductCarousel;
