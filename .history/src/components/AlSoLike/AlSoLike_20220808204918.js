import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";

function AlSoLike() {
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "15px 0" }}> You might also like</h2>
      <TopSmartWatches />
      <br />
      <TopSellersInBook />
      <br />
      <TopVideosGames />
      <br />
      <TopSellerDresses />
    </div>
  );
}

export default AlSoLike;
