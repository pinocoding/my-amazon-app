import React from "react";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Test({
  adaptiveHeight,
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <div className="topsellercarousel">
        <Slider {...settings}>
          <div onClick={scrollToTop} className="slider__img">
            <Link to="/Dresses">
              <img
                alt="#"
                src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </Link>
          </div>
          <div onClick={scrollToTop} className="slider__img">
            <Link to="/Dresses">
              <img
                alt="#"
                src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </Link>
          </div>{" "}
          <div onClick={scrollToTop} className="slider__img">
            <Link to="/Dresses">
              <img
                alt="#"
                src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </Link>
          </div>{" "}
        </Slider>
      </div>
    </div>
  );
}

export default Test;
