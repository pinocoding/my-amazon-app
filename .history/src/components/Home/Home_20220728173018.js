import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
//
import HeaderCarousel from "../CarouselForm/HeaderCarousel";
import TopSellersInHome from "../CarouselForm/TopSellersInHome";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSellersInKitchen from "../CarouselForm/TopSellersInKitchen";
import TopSellersInHomeImprovement from "../CarouselForm/TopSellersInHomeImprovement";
import PopularProductsInApparel from "../CarouselForm/PopularProductsInApparel";
import TopSellersInToys from "../CarouselForm/TopSellersInToys";
//
// ----CardlayOut----
import Card1 from "../CardLayout/Card1";
import Card2 from "../CardLayout/Card2";
import Card3 from "../CardLayout/Card3";
// ----CardlayOut----

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <HeaderCarousel
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={3000}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        />
        <div className="home__cardlayout">
          <Card2
            link1="headsets"
            link2="keyboards"
            link3="Mouses"
            link4="Chairs"
            title="Gaming accessories"
            image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            nameimg1="Headesets"
            image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
            nameimg2="Keyboards"
            image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
            nameimg3="Computer mice"
            image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
            nameimg4="Chairs"
            gamingaccess="/GamingAccess"
            BtnContent="See more"
          />

          <Card2
            link1="computersaccessories"
            link2="keyboards"
            link3="Mouses"
            link4="Chairs"
            title="Shop by Category"
            image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
            nameimg1="Computers &"
            nameimg12="Accessories"
            image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg"
            nameimg2="Video Games"
            image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg"
            nameimg3="Baby"
            image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg"
            nameimg4="Toys & Games"
            gamingaccess="/GamingAccess"
            BtnContent="Shop Now"
          />

          <Card1
            title="Dresses"
            image="https://i.pinimg.com/originals/23/4c/78/234c78d367f937a8a1c8c5dde3603d00.jpg"
            link1="/Dresses"
            BtnContent="Shop now"
          />

          <Card3
            link="/login"
            title="Sign in for the best experience"
            BtnContent="Shop now"
          />
        </div>
        <div className="home__cardlayout">
          <Card1
            link1="computersaccessories"
            title="Computers & Accessories"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Bb4sifgVbSUA47Ia2jsULJRguTJidEoAQ&usqp=CAU"
            gamingaccess="/GamingAccess"
            BtnContent="Shop now"
          />
          <Card1
            title="Beauty picks"
            image="https://i.pinimg.com/originals/44/0b/db/440bdb0f5043056d99a938139d37bb77.jpg"
            BtnContent="Shop now"
            link1="/BeautyPicks"
          />
          <Card1
            title="Deal of the Day"
            link1="/DealOfTheDay"
            image="https://media.istockphoto.com/photos/finalizing-the-big-business-deal-of-the-day-picture-id931194156"
            BtnContent="Shop now"
          />
          <Card1
            title="Health & Personal Care"
            link1="/HealthPersonalCare"
            image="https://i.pinimg.com/736x/40/5d/cb/405dcb1780625a67da2f5ddc44146618.jpg"
            BtnContent="Shop now"
          />
        </div>
        <div className="carousel">
          <TopSellersInHome
            link="/InternationalTopSellersInHome"
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <TopSellersInBook
            link="/TopSellersInBooksForYou"
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <div className="home__cardlayout">
            <Card1
              title="Create with strip lights"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
              BtnContent="Shop now"
            />
            <Card1
              title="Shop Laptops & Tablet"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
              BtnContent="Shop now"
            />
            <Card1
              title="Kindle E readers"
              image="https://m.media-amazon.com/images/I/61llYYr0B0L._AC_SY450_.jpg"
              BtnContent="Shop now"
            />
          </div>

          <TopSellersInKitchen
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <TopSellersInHomeImprovement
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <div className="home__cardlayout">
            <Card1
              title="Shop activity trackers and smartwatches"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
              BtnContent="Shop now"
            />
            <Card1
              title="For your Fitness Needs"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
              BtnContent="Shop now"
            />
            <Card1
              title="Shop Pet supplies"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
              BtnContent="Shop now"
            />
          </div>
          <PopularProductsInApparel
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <TopSellersInToys
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
