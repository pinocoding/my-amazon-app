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
        <img
          alt="#"
          src="https://m.media-amazon.com/images/I/61EoEnI7pYL._AC_SY200_.jpg"
        />

        <img
          alt="#"
          src="https://m.media-amazon.com/images/I/81yovBQqGgL._AC_SY200_.jpg"
        />

        <img
          alt="#"
          src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
        />

        <img
          alt="#"
          src="https://m.media-amazon.com/images/I/61a6vb+BrHL._AC_SY200_.jpg"
        />

        <img
          alt="#"
          src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
        />
        <img
          alt="#"
          src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
        />
      </Slider>
    </div>
  );
}

export default TopSellerInHome;
