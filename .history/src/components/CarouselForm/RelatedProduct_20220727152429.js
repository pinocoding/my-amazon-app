import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function RelatedProduct({
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
  const relatedList = context.relatedList;
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
        {relatedList.map((itemList) => {
          return (
            <Slider {...settings}>
              <div className="slider__img">
                <img
                  alt="#"
                  src="https://m.media-amazon.com/images/I/81AugyntpCL._AC_SY200_.jpg"
                />
              </div>
            </Slider>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
