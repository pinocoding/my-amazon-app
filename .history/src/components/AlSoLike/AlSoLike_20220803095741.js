import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";

function AlSoLike() {
  return (
    <div>
      <h4> You may also like</h4>
      <TopSmartWatches />
      <TopSellersInBook />
      <TopSellerDresses />
      <TopVideosGames />
    </div>
  );
}

export default AlSoLike;
