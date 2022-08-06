import React from "react";
import Bookbg from "../../assets/images/bookbg.png";
import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularHightLight() {
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
          <img alt="/#" src={Bookbg}>

          </div>
      </Slider>
    </div>
  );
}

export default PopularHightLight;
