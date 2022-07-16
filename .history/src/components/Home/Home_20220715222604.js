import React from "react";
import Carousel from "../CarouselForm/Carousel";
import "./Home.css";
// ----CardlayOut----
import Card1 from "../CardLayout/Card1";
import Card2 from "../CardLayout/Card2";
import { Link } from "react-router-dom";
// ----CardlayOut----

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />
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
          <Card1
            title="Fashion Finds under $200"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See the full edit from Shopbop"
          />
        </div>
        <div className="home__cardlayout">
          <Card1
            title="Computers & Accessories"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            BtnContent="Shop now"
          />
          <Card1
            title="Beauty picks"
            image="https://i.pinimg.com/originals/23/4c/78/234c78d367f937a8a1c8c5dde3603d00.jpg"
            BtnContent="Shop now"
          />
          <Card1
            title="Deal of the Day"
            image="https://i.pinimg.com/originals/23/4c/78/234c78d367f937a8a1c8c5dde3603d00.jpg"
            BtnContent="Shop now"
          />
          <Card1
            title="Health & Personal Care"
            image="https://i.pinimg.com/originals/23/4c/78/234c78d367f937a8a1c8c5dde3603d00.jpg"
            BtnContent="Shop now"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
