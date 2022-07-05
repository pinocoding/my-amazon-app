import React from "react";
import "./Home.css";
// import styled from "styled-components";
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
            title="Wonders of the World: Atlas of the Most Spectacular Monuments"
            price={29.99}
            image="https://bizweb.dktcdn.net/thumb/1024x1024/100/282/917/products/9788854415522.jpg?v=1644836780300"
            rating={2}
          />
          <Product
            id={12312312}
            title="Where the Crawdads Sing"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41rzRPDRxJL._SX331_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
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
            title="Ugly Love: A Novel Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SX320_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={12312312}
            title="Reminders of Him: A Novel"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://manhinhmaytinhcu.xyz/wp-content/uploads/2018/04/man-hinh-may-tinh-sieu-rong-5.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
