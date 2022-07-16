import React from "react";
import Carousel from "../CarouselForm/Carousel";
import "./Home.css";
// ----CardlayOut----
import Card1 from "../CardLayout/Card1";
import Card2 from "../CardLayout/Card2";
// ----CardlayOut----

function home() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div className="home">
      <div className="home__container">
        <Carousel />

        <div className="home__cardlayout">
          <Card2
            title="Deals on overstock sandals"
            image1="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            image2="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            image3="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            image4="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See more in Outlet"
          />
          <Card1
            title="Fashion Finds under $200"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See the full edit from Shopbop"
          />
          <Card1
            title="Deal of the Day"
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            BtnContent="See all deals"
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
