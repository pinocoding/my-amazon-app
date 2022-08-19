import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { scrollToTop } from "../Backtotop/Backtotop";
import { Link } from "react-router-dom";
import dress from "../../assets/images/dress.png";
import dress1 from "../../assets/images/dress1.png";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import Slider from "react-slick";

function TopSellerDresses() {
  const settings = {
    className: "center",
    autoPlay: false,
    infinite: true,
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
  const context = useContext(DataContext);
  const isDark = context.isDark;

  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <Link to="/Dresses" onClick={scrollToTop}>
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img src={dress1} alt={dress} />
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
                    .map((value, index) => (
                      <StarRateIcon key={index} />
                    ))}
                </div>
                <div className="card__carrouselDes">$ 99</div>
              </div>
            </Link>
            <Link to="/Dresses" onClick={scrollToTop}>
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img src={dress1} alt={dress} />
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
                    .map((value, index) => (
                      <StarRateIcon key={index} />
                    ))}
                </div>
                <div className="card__carrouselDes">$ 99</div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDresses;