import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { scrollToTop } from "../Backtotop/Backtotop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import Slider from "react-slick";
import Dress from "../../assets/images/dress.png";
import Chair from "../../assets/images/chair.png";
import HeadPhone from "../../assets/images/headphone.png";
import KeyBoard from "../../assets/images/keyboard.png";
import Mouse from "../../assets/images/mouse.png";
import PC from "../../assets/images/pc.png";
import PS4 from "../../assets/images/ps4.png";
import Baby from "../../assets/images/baby.png";
import Robot from "../../assets/images/robot.png";
function TopSellerDressesTest() {
  const settings = {
    // dots: true,
    className: "center",
    autoPlay: true,
    infinite: true,
    speed: 1000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const context = useContext(DataContext);
  const isDark = context.isDark;

  const imgStyle = {
    objectFit: "contain",
    width: "64%",
  height: "250px
  };
  const imgStyle1 = {
    width: "91%",
  };
  const carouselStyle = {
    minHeight: "120px",
  };
  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <Link to="/headsets" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle} src={HeadPhone} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/chairs" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={Chair} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/computersaccessories" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={PC} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/VideoGames" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={PS4} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/VideoGames" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={Robot} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/headsets" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle} src={HeadPhone} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/chairs" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={Chair} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/computersaccessories" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={PC} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/VideoGames" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={PS4} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </div>
              </div>
            </Link>
            <Link to="/VideoGames" onClick={scrollToTop}>
              <div
                style={carouselStyle}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img style={imgStyle1} src={Robot} alt="#/" />
                </div>

                <div className="card__carrouselRating">
                  {Array(3)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
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
