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
        <div>
          <Slider {...settings}>
          <div onClick={scrollToTop} className="slider__img">
            <div className="card">
              <div className="card__sales">
                <p>Best Price</p>
              </div>

              <h2 className="card__title">lorem</h2>
              <p className="price">
                <strong>$</strong> 999
              </p>

              <p className="card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos amet mollitia voluptatem accusantium modi voluptates
                dolore qui, labore quae? Rem repellendus qui tempora corrupti
                beatae exercitationem laboriosam voluptatum iste quo?
              </p>
            </div>
          </div>
          <div onClick={scrollToTop} className="slider__img">
            <a href="/BookStores">
              <img
                alt="#"
                src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </a>
          </div>
          <div onClick={scrollToTop} className="slider__img">
            <a href="/BookStores">
              <img
                alt="#"
                src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
