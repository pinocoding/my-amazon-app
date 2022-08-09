import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";

function AlSoLike() {
  const style = ` boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)" `;
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "15px 0" }}> You might also like</h2>
      <div style={style}>
        <TopSmartWatches />
      </div>

      <br />
      <div style={style}>
        <TopSellersInBook />
      </div>

      <br />
      <div>
        <TopVideosGames />
      </div>

      <br />
      <div>
        <TopSellerDresses />
      </div>
    </div>
  );
}

export default AlSoLike;
