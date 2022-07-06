import React from "react";

import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="https://images.wallpapersden.com/image/download/amazon-the-boys-season-2022_bWllbGaUmZqaraWkpJRmbmdlrWZlbWU.jpg" />
        </div>
        <div>
          <img src="https://images6.fanpop.com/image/photos/43400000/The-Boys-Season-3-Announcement-Poster-the-boys-amazon-prime-video-43462265-1920-1080.jpg" />
        </div>
        <div>
          <img src="https://cdn.mos.cms.futurecdn.net/SBt9pB7xnjNdcerRHBBhxh-970-80.jpg.webp" />
        </div>
        <div>
          <img src="https://images.wallpapersden.com/image/download/amazon-the-boys-season-2022_bWllbGaUmZqaraWkpJRmbmdlrWZlbWU.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
