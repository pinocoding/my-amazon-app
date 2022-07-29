import React, { useContext } from "react";
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
  const SellersInBook = context.SellersInBook;
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
