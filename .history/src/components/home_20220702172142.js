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
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – September 13, 2011"
            price={29.99}
            image="http://https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/188/K.jpg"
            rating={4}
          />
          <Product />
          {/* product */}
        </div>
        <div className="home__row">
          {/* product  */}
          {/* product  */}
          {/* product */}
        </div>
        <div className="home__row">{/* product  */}</div>
      </div>
    </div>
  );
}

export default home;
