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
                    src="https://img.freepik.com/free-vector/blooming-cacti-varieties-4-realistic-mini-posters-set-with-popular-house-plants-decorative-pots_1284-27655.jpg?w=996&t=st=1659489229~exp=1659489829~hmac=3f29d61d20352dc5ed0f4379f19dcb3330e5dfa16dac272d09b95e4053b3db29"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/free-vector/blooming-cacti-varieties-4-realistic-mini-posters-set-with-popular-house-plants-decorative-pots_1284-27655.jpg?w=996&t=st=1659489229~exp=1659489829~hmac=3f29d61d20352dc5ed0f4379f19dcb3330e5dfa16dac272d09b95e4053b3db29"
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
            <Link to="/VideoGames">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/blooming-cacti-varieties-4-realistic-mini-posters-set-with-popular-house-plants-decorative-pots_1284-27655.jpg?w=996&t=st=1659489229~exp=1659489829~hmac=3f29d61d20352dc5ed0f4379f19dcb3330e5dfa16dac272d09b95e4053b3db29"
                    alt=""
                  />
                  <img
                    src="https://img.freepik.com/free-vector/blooming-cacti-varieties-4-realistic-mini-posters-set-with-popular-house-plants-decorative-pots_1284-27655.jpg?w=996&t=st=1659489229~exp=1659489829~hmac=3f29d61d20352dc5ed0f4379f19dcb3330e5dfa16dac272d09b95e4053b3db29"
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
            </Link>{" "}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDressesTest;
