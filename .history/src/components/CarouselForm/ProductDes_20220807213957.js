import React from "react";
import Bookbg from "../../assets/images/bookbg.png";
import "./Carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductDes({ img }) {
  const settings = {
    className: "center",
    dots: true,
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
        <div className="book__container">
          <img src={img} alt="" />
        </div>
        <div className="book__container">
          <img src={img} alt="" />
        </div>
        <div className="book__container">
          <img src={img} alt="" />
        </div>
        <div className="book__container">
          <img src={img} alt="" />
        </div>
        <div className="book__container">
          <img src={img} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ProductDes;
