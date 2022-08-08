import React from "react";
import ProductDes from "../CarouselForm/ProductDes";
import "./ProductDetail.css";

function ProductDetails({ img }) {
  return (
    <div className="product-detail">
      <h3>Product Description</h3>
      <ProductDes img={img} />
      <div>
        <div className="main-img"></div>
        <div className="Secondary-img">
          <div className="main-img1"></div>
          <div className="main-img2"></div>
          <div className="main-img3"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
