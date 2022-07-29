import React from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularProductsInApparel({
  adaptiveHeight,
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
}) {import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function RelatedHeadsProduct({
  adaptiveHeight,
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
}) {
  const context = useContext(AuthContext);
  const relatedHeadsList = context.relatedHeadsList;
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
  // console.log(relatedList.img);

  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            {relatedHeadsList.map((itemList) => {
              return (
                <div className="slider__img">
                  <img alt="#" src={itemList.image} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RelatedHeadsProduct;

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
        <h3>International top sellers in Home</h3>
        <Slider {...settings}>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81AugyntpCL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/A1ksEEy-A9L._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/61EoEnI7pYL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/715ZHO7u4yL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/713QmUSbJXL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/81yovBQqGgL._AC_SY200_.jpg"
            />
          </div>
          <div className="slider__img">
            <img
              alt="#"
              src="https://m.media-amazon.com/images/I/91qqiXudI0L._AC_SY200_.jpg"
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

export default PopularProductsInApparel;
