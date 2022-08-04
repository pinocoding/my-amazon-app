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
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/colorful-vintage-mars-exploration-poster_225004-2196.jpg?w=360"
                    alt=""
                  />
                </div>
                <div className="card__carrouselTitle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit quaerat soluta nemo eum ipsam molestiae
                  assumenda. Quod provident maiores aliquam voluptas quibusdam
                  aspernatur assumenda maxime placeat itaque delectus? Ducimus,
                  at?
                </div>
                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
                <div className="card__carrouselDes">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  aliquid rem quos velit, eligendi incidunt impedit, laudantium
                  quod amet ratione sed, sapiente quaerat! Amet dolor iste
                  deserunt inventore vel earum.
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDressesTest;
