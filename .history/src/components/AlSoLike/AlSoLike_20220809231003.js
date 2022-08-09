import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";

function AlSoLike() {
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "15px 0" }}> You might also like</h2>
      <div>
        {" "}
        <TopSmartWatches />
      </div>

      <br />
      <div>
        <TopSellersInBook />
      </div>

      <br />
      <div></div>
      <TopVideosGames />
      <br />
      <div></div>
      <TopSellerDresses />
    </div>
  );
}

export default AlSoLike;
