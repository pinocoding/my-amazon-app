import React from "react";

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
            <div className="card__carrousel">
              <img
                className="card__carrouselImg"
                alt="#"
                src="https://img.freepik.com/premium-vector/portrait-programmer-working-with-pc_23-2148217001.jpg?size=338&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
              />

              <h2 className="card__title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                aliquid, delectus, veniam soluta rem vero suscipit blanditiis
                accusantium explicabo nisi eum quae nam consectetur maxime alias
                saepe. Quia, nemo? Odit!
              </h2>
              <p className="rating">
                {Array(4)
                  .fill()
                  .map(() => (
                    <StarRateIcon />
                  ))}
              </p>
              <p className="price">
                <strong>$</strong>999
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDressesTest;
