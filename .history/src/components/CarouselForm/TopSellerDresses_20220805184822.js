import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from "@mui/icons-material/StarRate";
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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
            <Link to="/Dresses">
              <div className="card__carrousel">
                <div className="card__carrouselSales">
                  <p className="card__carrouselRibbon">Best price!</p>
                </div>
                <div className="card__carrouselImg">
                  <img
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
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

export default TopSellerDresses;
