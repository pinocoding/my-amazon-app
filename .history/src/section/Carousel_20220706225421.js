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
    autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg" />
        </div>
        <div>
          <img src="https://images6.fanpop.com/image/photos/43400000/The-Boys-Season-3-Announcement-Poster-the-boys-amazon-prime-video-43462265-1920-1080.jpg" />
        </div>
        <div>
          <img src="https://initiate.alphacoders.com/images/103/stretched-1920-1080-1038324.jpg?2287" />
        </div>
        <div>
          <img src="https://initiate.alphacoders.com/images/118/stretched-1920-1080-1184878.jpg?7061" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
