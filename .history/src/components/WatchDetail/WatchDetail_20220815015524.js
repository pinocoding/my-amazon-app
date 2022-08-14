import React from "react";
import "./WatchDetail.css";
function DressDetail({ img, detailImg }) {
  return (
    <div className="product-detail">
      <ProductDes img={img} />
      <div>
        <br />
        <h3>Product Description</h3>
        <br />
        <div className="main">
          <img className="main-img" src={dressCar} alt={dressCar} />
        </div>
        <div className="middle">
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, asperiores dignissimos provident quibusdam architecto
              reprehenderit quod accusantium, ullam esse doloribus porro error
              cum alias in impedit totam animi voluptas quo.
            </p>
          </div>
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, asperiores dignissimos provident quibusdam architecto
              reprehenderit quod accusantium, ullam esse doloribus porro error
              cum alias in impedit totam animi voluptas quo.
            </p>
          </div>
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, asperiores dignissimos provident quibusdam architecto
              reprehenderit quod accusantium, ullam esse doloribus porro error
              cum alias in impedit totam animi voluptas quo.
            </p>
          </div>
        </div>
        <br />
        <div className="Secondary">
          <img src={dressCar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WatchDetail;
