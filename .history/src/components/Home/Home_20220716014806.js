import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HeaderCarousel from "../CarouselForm/HeaderCarousel";
import TopSellersInHome from "../CarouselForm/TopSellersInHome";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopSellersInKitchen from "../CarouselForm/TopSellersInKitchen";
import TopSellersInHomeImprovement from "../CarouselForm/TopSellersInHomeImprovement";
import PopularProductsInApparel from "../CarouselForm/PopularProductsInApparel";
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
            title="Gaming accessories"
            image1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            nameimg1="Headesets"
            image2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
            nameimg2="Keyboards"
            image3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
            nameimg3="Computer mice"
            image4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
            nameimg4="Chairs"
            BtnContent="See more"
          />

          <Card2
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
            BtnContent="Shop Now"
          />

          <Card1
            title="Dresses"
            image="https://i.pinimg.com/originals/23/4c/78/234c78d367f937a8a1c8c5dde3603d00.jpg"
            BtnContent="Shop now"
          />
          <Card3
            title="Sign in for the best experience"
            BtnContent="Shop now"
          />
        </div>
        <div className="home__cardlayout">
          <Card1
            title="Computers & Accessories"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4Bb4sifgVbSUA47Ia2jsULJRguTJidEoAQ&usqp=CAU"
            BtnContent="Shop now"
          />
          <Card1
            title="Beauty picks"
            image="https://i.pinimg.com/originals/44/0b/db/440bdb0f5043056d99a938139d37bb77.jpg"
            BtnContent="Shop now"
          />
          <Card1
            title="Deal of the Day"
            image="https://media.istockphoto.com/photos/finalizing-the-big-business-deal-of-the-day-picture-id931194156"
            BtnContent="Shop now"
          />
          <Card1
            title="Health & Personal Care"
            image="https://i.pinimg.com/736x/40/5d/cb/405dcb1780625a67da2f5ddc44146618.jpg"
            BtnContent="Shop now"
          />
        </div>
        <div className="carousel">
          <TopSellersInHome
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <TopSellersInBook
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <TopSellersInKitchen
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <TopSellersInHomeImprovement
            adaptiveHeight={true}
            dots={false}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            speed={500}
            slidesToShow={5}
            slidesToScroll={2}
          />
          <PopularProductsInApparel />
        </div>
      </div>
    </div>
  );
}

export default home;
