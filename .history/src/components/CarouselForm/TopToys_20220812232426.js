import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import Slider from "react-slick";

function TopToys() {
  const settings = {
    // dots: true,
    className: "center",
    autoplay: false,
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
  var elements = [];

  const context = useContext(DataContext);
  const isDark = context.isDark;
  return (
    <div className="container">
      <div className="topsellercarousel">
        <Slider {...settings}></Slider>
      </div>
    </div>
  );
}

export default TopToys;
