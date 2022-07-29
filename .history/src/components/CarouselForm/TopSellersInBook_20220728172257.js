import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSellersInBook({
  adaptiveHeight,
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
  link,
}) {
  const settings = {
    adaptiveHeight,
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
            <a href={link}></a>
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
              src="https://m.media-amazon.com/images/I/71DVgaO+EnL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81PR3BDkqWL._AC_SY200_.jpg"
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
              src="https://m.media-amazon.com/images/I/A110vzie0nL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/8181NkFL6SL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/91rNSPVrrjL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TopSellersInBook;
