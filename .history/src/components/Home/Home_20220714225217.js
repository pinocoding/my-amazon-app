import React from "react";
import Carousel from "../CarouselForm/Carousel";
import "./Home.css";
import Product from "../ProductCard/Product";

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />

        <div className="home__row">
          <Product
            title="Deals on overstock sandals"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See more in Outlet"
          />
          <Product
            title="Fashion Finds under $200"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See the full edit from Shopbop"
          />
          <Product
            title="Deal of the Day"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See all deals"
          />
          <Product
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