import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSellersInBook({
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
    <div className="container">
      <div className="topsellercarousel">
        <h3>Top Sellers in Books for you</h3>
        <Slider {...settings}>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/91cqEsyjd-L._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/71aLultW5EL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/61Ars9rdgGS._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/811ftjOO5FL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81uLDSQNJDL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/61b0ykVnwLL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/815HW5swpvL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/715shoBi24L._AC_SY200_.jpg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TopSellersInBook;
