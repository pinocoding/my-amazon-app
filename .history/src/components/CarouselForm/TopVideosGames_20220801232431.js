import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSellerDresses({
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
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/VideoGames">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={() => scrollToTop} className="slider__img">
              <Link to="/VideoGames">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={() => scrollToTop} className="slider__img">
              <Link to="/VideoGames">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={() => scrollToTop} className="slider__img">
              <Link to="/VideoGames">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={() => scrollToTop} className="slider__img">
              <Link to="/VideoGames">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDresses;
