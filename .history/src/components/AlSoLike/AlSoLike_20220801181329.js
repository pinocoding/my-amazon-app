import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";
import TopToys from "../CarouselForm/TopToys";
import "./../Product.css";
function AlSoLike() {
  return (
    <div>
      <h4> You may also like</h4>
      <TopSmartWatches
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopSellersInBook
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopSellerDresses
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopVideosGames
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
      <TopToys
        adaptiveHeight={true}
        dots={false}
        infinite={true}
        autoplay={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
    </div>
  );
}

export default AlSoLike;
