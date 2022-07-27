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
  console.log(relatedList);

  return (
    <div className="container">
      <div className="topsellercarousel">
        <h3>International top sellers in Home</h3>
        {relatedList.map((itemList) => {
          return (
            <Slider {...settings}>
              <div className="slider__img">
                <img alt="#" src={itemList.image} />
              </div>
            </Slider>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProduct;
