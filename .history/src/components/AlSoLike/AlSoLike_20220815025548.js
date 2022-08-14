import React from "react";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";
import TopSellerDressesTest from "../CarouselForm/TopSellerDressesTest";

function AlSoLike() {
  const style = {};
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "15px 0" }}> You might also like</h2>


      <div style={style}>
        <TopSellerDresses />
      </div>
      <div style={style}>
        <TopSellerDressesTest />
      </div>
      <br />
      <div style={style}>
        <TopSmartWatches />
      </div>

      <br />
      <div style={style}>
        <TopSellersInBook />
      </div>

      <br />
      <div style={style}>
        <TopVideosGames />
      </div>
    </div>
  );
}

export default AlSoLike;
