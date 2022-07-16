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
          <Link to="/">
            <Card2
              title="Gaming accessories"
              image1="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
              nameimg1="Headesets"
              image2="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
              nameimg2="Keyboards"
              image3="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
              nameimg3="Computer mice"
              image4="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
              nameimg4="Chairs"
              BtnContent="See more"
            />
          </Link>
          <Card2
            title="Shop by Category"
            image1="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            nameimg1="Computers &"
            nameimg12="Accessories"
            image2="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            nameimg2="Video Games"
            image3="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            nameimg3="Baby"
            image4="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            nameimg4="Toys & Games"
            BtnContent="Shop Now"
          />

          <Card1
            title="Dresses"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="Shop now"
          />
          <Card1
            title="Fashion Finds under $200"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See the full edit from Shopbop"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
