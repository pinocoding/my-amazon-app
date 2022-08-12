import React from "react";
import Bookbg from "../../assets/images/bookbg.png";
import { scrollToTop } from "../Backtotop/Backtotop";

import "./Carousel.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function PopularHightLight() {
  const settings = {
    className: "center",
    dots: true,
    autoPlay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
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
    <div className="container" onClick={scrollToTop}>
      <Slider {...settings}>
        <div className="book__container">
          <img src={Bookbg} alt="" />
          <p className="book__containerTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            harum exercitationem. Nostrum iste modi laborum animi quam...
          </p>
        </div>
        <div className="book__container">
          <img src={Bookbg} alt="" />
          <p className="book__containerTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            harum exercitationem. Nostrum iste modi laborum animi quam...
          </p>
        </div>
        <div className="book__container">
          <img src={Bookbg} alt="" />
          <p className="book__containerTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            harum exercitationem. Nostrum iste modi laborum animi quam...
          </p>
        </div>
        <div className="book__container">
          <img src={Bookbg} alt="" />
          <p className="book__containerTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            harum exercitationem. Nostrum iste modi laborum animi quam
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default PopularHightLight;
