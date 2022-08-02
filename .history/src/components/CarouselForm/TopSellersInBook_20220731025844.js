import React from "react";

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
          <Slider {...settings}>
            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>
            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>

            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>

            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>

            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>

            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>

            <div className="slider__img">
              <a href="/BookStores">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RelatedHeadsProduct;
