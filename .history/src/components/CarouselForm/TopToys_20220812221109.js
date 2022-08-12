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
  const context = useContext(DataContext);
  const isDark = context.isDark;
  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <Link to="/Toys">
              <div
                key={key}
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Toys">
              <div
                className={`card__carrousel ${
                  isDark ? "carousel-dark" : "carousel-light"
                }`}
              >
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-japanese-symbols-oriental-traditional-toys-maneki-neko-omamori-daruma-kokeshi-dolls-vector-illustration-set-cute-japan-culture-traditional-japanese-oriental-culture-japan-souvenir_229548-1702.jpg?size=626&ext=jpg&uid=R76010792&ga=GA1.2.826934667.1658638639"
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

export default TopToys;
