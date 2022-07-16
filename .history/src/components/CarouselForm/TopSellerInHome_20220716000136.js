import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSellerInHome({
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
}) {
  const settings = {
    dots,
    infinite,
    autoplay,
    autoplaySpeed,
    speed,
    slidesToScroll,
    slidesToShow,
  };
  return (
    <div className="container topsellercarousel">
      <Slider {...settings}>
        <div>
          <img
            alt="#"
            src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default TopSellerInHome;
