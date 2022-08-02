import React from "react";

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

  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/video-game-twitter-header_23-2148663268.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>

            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/kawaii-retro-video-games-stickers-collection_52683-70532.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/video-game-twitter-header_23-2148663268.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/premium-vector/pixel-game-win-screen-retro-8-bit-video-game-interface-with-you-win-text-computer-game-level-up-background-vector-pixel-art-illustration_102902-6117.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
