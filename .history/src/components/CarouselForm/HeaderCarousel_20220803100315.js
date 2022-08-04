import React from "react";

import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeaderCarousel({
  const settings = {
    // dots: true,
    className: "center",
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    autoPlay: true,
    infinite: true,

    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img
            alt="#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
          />
        </div>
        <div>
          <img
            alt="#"
            src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg"
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
