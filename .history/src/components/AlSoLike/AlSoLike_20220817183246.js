import React from "react";
import { useTranslation } from "react-i18next";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";
import TopSellerDressesTest from "../CarouselForm/TopSellerDressesTest";

function AlSoLike() {
  const { t } = useTranslation(["common"]);
  const style = {};
  return (
    <div style={{ width: "100%" }}>
      <h2 style={{ margin: "15px 0" }}>{t("You might also like")}</h2>
      <h4>{t("Top Sellers Of The Day")}</h4>
      <div style={style}>
        <TopSellerDressesTest />
      </div>
      <br />
      <div style={style}>
        <TopSellerDresses />
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
