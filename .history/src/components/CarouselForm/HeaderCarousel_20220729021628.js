import React from "react";

import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeaderCarousel({
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
}) {
  const settings = {
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
      <Slider {...settings}>
        <div>
          <img
            alt="#"
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://images6.fanpop.com/image/photos/43400000/The-Boys-Season-3-Announcement-Poster-the-boys-amazon-prime-video-43462265-1920-1080.jpg"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://images6.fanpop.com/image/photos/43400000/The-Boys-Season-3-Announcement-Poster-the-boys-amazon-prime-video-43462265-1920-1080.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeaderCarousel;
