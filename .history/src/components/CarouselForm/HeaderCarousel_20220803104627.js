import React from "react";

import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeaderCarousel() {
  const settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,

    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img
            alt="/#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="/#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="/#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="/#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="/#"
            src="https://images6.fanpop.com/image/photos/43400000/The-Boys-Season-3-Announcement-Poster-the-boys-amazon-prime-video-43462265-1920-1080.jpg"
          />
        </div>
        <div>
          <img
            alt="/#"
            src="https://images6.fanpop.com/image/photos/43400000/The-Boys-Season-3-Announcement-Poster-the-boys-amazon-prime-video-43462265-1920-1080.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeaderCarousel;
