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
            id={12312312}
            title="It Ends with Us: A Novel (1)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            rating={2}
          />
          <Product
            id={12312312}
            title="It Ends with Us: A Novel (1)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            rating={2}
          />
          <Product
            id={12312312}
            title="It Ends with Us: A Novel (1)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            rating={2}
          />
          <Product
            id={12312312}
            title="It Ends with Us: A Novel (1)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
