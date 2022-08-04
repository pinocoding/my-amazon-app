import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";

function AlSoLike() {
  return (
    <div style={{ width: "100%" }}>
      <h4> You may also like</h4>
      <h5>Top Smart Watches</h5>
      <TopSmartWatches />
    </div>
  );
}

export default AlSoLike;
