import React from "react";
import { useTranslation } from "react-i18next";

import Dress from "../../assets/images/dress.png";
import Chair from "../../assets/images/chair.png";
import HeadPhone from "../../assets/images/headphone.png";
import KeyBoard from "../../assets/images/keyboard.png";
import Mouse from "../../assets/images/mouse.png";
import PC from "../../assets/images/pc.png";
import PS4 from "../../assets/images/ps4.png";
import Baby from "../../assets/images/baby.png";
import Robot from "../../assets/images/robot.png";

import "./Home.css";
//

import TopSellerDressesTest from "../CarouselForm/TopSellerDressesTest";
import TopToys from "../CarouselForm/TopToys";
import HeaderCarousel from "../CarouselForm/HeaderCarousel";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";

// ----CardlayOut----
import Card1 from "../CardLayout/Card1";
import Card2 from "../CardLayout/Card2";
import Card3 from "../CardLayout/Card3";

// ----CardlayOut----

function Home() {
  const { t } = useTranslation(["common"]);
  const styleH = {
    margin: "10px 0",
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__carousel">
          <HeaderCarousel />
        </div>
        <div className="home__cardlayout">
          <Card2
            link1="headsets"
            link2="keyboards"
            link3="mouses"
            link4="chairs"
            title={t("Gaming Gears")}
            image1={HeadPhone}
            nameimg1={t("Headsets")}
            image2={KeyBoard}
            nameimg2={t("Keyboards")}
            image3={Mouse}
            nameimg3={t("Computer mice")}
            image4={Chair}
            nameimg4={t("Chairs")}
          />

          <Card2
            link1="computersaccessories"
            link2="VideoGames"
            link3="Baby"
            link4="Toys"
            title={t("Shop by Category")}
            image1={PC}
            nameimg1={t("Computers")}
            image2={PS4}
            nameimg2={t("Video Games")}
            image3={Baby}
            nameimg3={t("Gameboy")}
            image4={Robot}
            nameimg4={t("Toys & Games")}
          />

          <Card1 title={t("Dresses")} image={Dress} link1="/Dresses" />

          <Card3
            link="/login"
            title={t("Sign in for the best experience")}
            titleLogin={t("Sign in securely")}
          />
        </div>
        <div className="home__cardlayout">
          <Card1
            link1="computersaccessories"
            title={t("Computers & Accessories")}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Bb4sifgVbSUA47Ia2jsULJRguTJidEoAQ&usqp=CAU"
          />
          <Card1
            title={t("Beauty picks")}
            image="https://i.pinimg.com/originals/44/0b/db/440bdb0f5043056d99a938139d37bb77.jpg"
            link1="/beautyPicks"
          />
          <Card1
            title={t("Deal of the Day")}
            link1="/DealOfTheDay"
            image="https://media.istockphoto.com/photos/finalizing-the-big-business-deal-of-the-day-picture-id931194156"
          />
          <Card1
            title={t("Health & Personal Care")}
            link1="/HealthPersonalCare"
            image="https://i.pinimg.com/736x/40/5d/cb/405dcb1780625a67da2f5ddc44146618.jpg"
          />
        </div>
        <div id="Topseller-section" className="carouseltest">
          <h4 style={styleH}>{t("Top Sellers Of The Day")}</h4>
          <TopSellerDressesTest />
        </div>
        <div id="Books-section" className="carousel">
          <h4 style={styleH}> {t("Top Books")}</h4>
          <TopSellersInBook />
        </div>
        <div className="carousel">
          <h4 style={styleH}> {t("Top Sexy Dresses")}</h4>
          <TopSellerDresses />
        </div>
        <div id="Watches-section" className="carousel">
          <h4 style={styleH}>{t("Top Smart Watches")}</h4>
          <TopSmartWatches />
        </div>

        <div className="carousel">
          <h4 style={styleH}> {t("Top Seller Videos Games")}</h4>
          <TopVideosGames />
        </div>

        <div className="home__cardlayout">
          <Card1
            link1="/StripLights"
            title={t("Create with strip lights")}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
          />
          <Card1
            link1="/Laptop"
            title={t("Shop Laptops & Tablet")}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
          />
          <Card1
            idLink="Kindle-section"
            link1="/Ekindle"
            title={t("Kindle E readers")}
            image="https://m.media-amazon.com/images/I/61llYYr0B0L._AC_SY450_.jpg"
          />
        </div>

        <div className="carousel">
          <h4 style={styleH}> {t("Top Toys")}</h4>
          <TopToys />
        </div>

        <div className="home__cardlayout">
          <Card1
            idLink="Watches-section"
            link1="/SmartWatches"
            title={t("Shop activity smartwatches")}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />

          <Card1
            idLink="Fitness-section"
            link1="/Fitness"
            title={t("For your Fitness Needs")}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          />
          <Card1
            idLink="Shoppet-section"
            link1="/ShopPet"
            title={t("Shop Pet supplies")}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
