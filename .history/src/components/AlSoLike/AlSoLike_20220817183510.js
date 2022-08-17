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

      <div style={style}>
        <h4>{t("Top Sellers Of The Day")}</h4>
        <TopSellerDressesTest />
      </div>
      <br />
      <div style={style}>
        <h4> {t("Top Sexy Dresses")}</h4>
        <TopSellerDresses />
      </div>

      <br />
      <div style={style}>
        <h4>{t("Top Smart Watches")}</h4>
        <TopSmartWatches />
      </div>

      <br />
      <div style={style}>
        <h4> {t("Top Books")}</h4>
        <TopSellersInBook />
      </div>

      <br />
      <div style={style}>
        <h4 style={div}> {t("Top Seller Videos Games")}</h4>
        <TopVideosGames />
      </div>
    </div>
  );
}

export default AlSoLike;
