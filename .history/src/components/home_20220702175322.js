import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg
        "
          alt=""
        />
        <div className="home__row">
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title="Where the Crawdads Sing"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SX331_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12312312}
            title="It Ends with Us: A Novel (1)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zhNb8Ei4L._SX320_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title="Ugly Love: A Novel Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SX320_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://manhinhmaytinhcu.com/wp-content/uploads/2018/04/man-hinh-may-tinh-sieu-rong-5.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
