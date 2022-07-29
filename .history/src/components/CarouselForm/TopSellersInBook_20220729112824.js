import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import BookStores from "../Products/BookStores/BookStores";
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
  const list = context.list;
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
          <h3>Top seller in book</h3>
          <Slider {...settings}>
            {SellersInBook.map((itemList) => {
              return (
                <div className="slider__img">
                  <a href="/BookStores">
                    <img alt="#" src={itemList.image} />
                  </a>
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
