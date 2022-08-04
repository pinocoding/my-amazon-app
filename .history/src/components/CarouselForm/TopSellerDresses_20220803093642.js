import React from "react";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSellerDresses() {
  const settings = {
    // dots: true,
    className: "center",
    autoPlay: true,
    infinite: false,
    speed: 500,
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
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>{" "}
            <div className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
