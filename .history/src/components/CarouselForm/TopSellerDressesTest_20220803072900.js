import React from "react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import Slider from "react-slick";

function TopSellerDressesTest({
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
            <Link to="/VideoGames">
              <div className="card__carrousel">
                {/* <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div> */}
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDressesTest;
