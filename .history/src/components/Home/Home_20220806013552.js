import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import "./Home.css";
//
import TopSellerDressesTest from "../CarouselForm/TopSellerDressesTest";
import TopToys from "../CarouselForm/TopToys";
import HeaderCarousel from "../CarouselForm/HeaderCarousel";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";
import MainloadingPage from "../LoaingPage/MainLoadingPage.css";
import LoadingPage from "../LoaingPage/LoadingPage";

// ----CardlayOut----
import Card1 from "../CardLayout/Card1";
import Card2 from "../CardLayout/Card2";
import Card3 from "../CardLayout/Card3";

// ----CardlayOut----

function Home() {
  const context = useContext(DataContext);
  const loading = context.Loading;

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
            title="Gaming Gears"
            image1="https://buy.geni.us/Proxy.ashx?TSID=103653&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2Fs%3Fk%3Dcomputer%2Bmouse%26ref%3Dnb_sb_noss_2&dtb=1"
            nameimg1="Headesets"
            image2="https://img.lovepik.com/free-png/20220127/lovepik-keyboard-3d-model-png-image_401944203_wh300.png"
            nameimg2="Keyboards"
            image3="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf9a.png"
            nameimg3="Computer mice"
            image4="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c26d.png"
            nameimg4="Chairs"
          />

          <Card2
            link1="computersaccessories"
            link2="VideoGames"
            link3="Baby"
            link4="Toys"
            title="Shop by Category"
            image1="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfa9.png"
            nameimg1="Computers "
            image2="https://assets.stickpng.com/thumbs/585ea27bcb11b227491c350b.png"
            nameimg2="Video Games"
            image3="https://assets.stickpng.com/thumbs/5a6a3c01ab538104d4a30e2e.png"
            nameimg3="Baby"
            image4="https://assets.stickpng.com/thumbs/585bb208cb11b227491c328a.png"
            nameimg4="Toys & Games"
          />

          <Card1
            title="Dresses"
            image="./Assets/img/Dress.png"
            link1="/Dresses"
          />

          <Card3 link="/login" title="Sign in for the best experience" />
        </div>
        <div className="home__cardlayout">
          <Card1
            link1="computersaccessories"
            title="Computers & Accessories"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Bb4sifgVbSUA47Ia2jsULJRguTJidEoAQ&usqp=CAU"
          />
          <Card1
            title="Beauty picks"
            image="https://i.pinimg.com/originals/44/0b/db/440bdb0f5043056d99a938139d37bb77.jpg"
            link1="/BeautyPicks"
          />
          <Card1
            title="Deal of the Day"
            link1="/DealOfTheDay"
            image="https://media.istockphoto.com/photos/finalizing-the-big-business-deal-of-the-day-picture-id931194156"
          />
          <Card1
            title="Health & Personal Care"
            link1="/HealthPersonalCare"
            image="https://i.pinimg.com/736x/40/5d/cb/405dcb1780625a67da2f5ddc44146618.jpg"
          />
        </div>
        <div className="carouseltest">
          <h4>Top Sellers Of The Day</h4>
          <TopSellerDressesTest />
        </div>
        <div className="carousel">
          <h4>Top Seller Vieos Games</h4>
          <TopVideosGames />
        </div>
        <div className="carousel">
          <h4>Top Sexy Dresses</h4>
          <TopSellerDresses />
        </div>

        <div className="home__cardlayout">
          <Card1
            link1="/StripLights"
            title="Create with strip lights"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
          />
          <Card1
            title="Shop Laptops & Tablet"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
          />
          <Card1
            title="Kindle E readers"
            image="https://m.media-amazon.com/images/I/61llYYr0B0L._AC_SY450_.jpg"
          />
        </div>

        <div className="carousel">
          <h4>Top Smart Watches</h4>
          <TopSmartWatches />
        </div>
        <div className="carousel">
          <h4>Top Books </h4>
          <TopSellersInBook />
        </div>
        <div className="carousel">
          <h4>Top Toys</h4>
          <TopToys />
        </div>

        <div className="home__cardlayout">
          <Card1
            link1="/SmartWatches"
            title="Shop activity smartwatches"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />
          <Card1
            title="For your Fitness Needs"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
          />
          <Card1
            title="Shop Pet supplies"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
