import Reactfrom "react";


import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function RelatedHeadsProduct({
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
  // console.log(relatedList.img);

  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <h5>Top seller in book</h5>
          <Slider {...settings}>


                <div className="slider__img">
                  <a href="/BookStores">
                    <img alt="#"/>
                  </a>
                </div>


          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RelatedHeadsProduct;
