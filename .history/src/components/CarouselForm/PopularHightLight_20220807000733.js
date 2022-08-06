import React from "react";
import Bookbg from "../../assets/images/bookbg.png";
import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularHightLight() {
  const settings = {
    className: "center",
    autoPlay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src={Bookbg} alt="" />
        </div>
        <div>
          <img src={Bookbg} alt="" />
        </div>
        <div>
          <img src={Bookbg} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default PopularHightLight;
