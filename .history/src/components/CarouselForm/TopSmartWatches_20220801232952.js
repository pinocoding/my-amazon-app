import React from "react";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSmartWatches({
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
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/SmartWatches">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/realistic-smart-watch-mockup_165789-534.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSmartWatches;
