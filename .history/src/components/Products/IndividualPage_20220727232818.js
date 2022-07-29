import React, { useEffect, useContext, useState } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { AuthContext } from "../DataLayer/Datalayer";
import RelatedHeadsProduct from "../CarouselForm/RelatedHeadsProduct";
import RelatedChairsProduct from "../CarouselForm/RelatedChairsProduct";
import RelatedKeysProduct from "../CarouselForm/RelatedKeysProduct";

import RelatedMousesProduct from "../CarouselForm/RelatedMousesProduct";
import { Link } from "react-router-dom";

import StarRateIcon from "@mui/icons-material/StarRate";
import "./Product.css";

function IndividualPage() {
  const [img, setImg] = useState();
  const context = useContext(AuthContext);
  const addToCart = context.addToCart;
  const buyNow = context.buyNow;

  const [{ itembox }] = useStateValue();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const handleBuyNow = (item) => {
    buyNow(item);
  };
  return (
    <div className="individual__wrap">
      {itembox.map((item) => {
        return (
          <div key={item.id} className="individual__container">
            <div className="individualleft__column">
              <div className="individualleft__mainimg">
                <img src={item.image} alt="" />
              </div>

              <div className="individualleft__altimg">
                {for let i=1;

                }
                <div className="individualleft__altimgmini">
                  <span>1</span>
                  <img src={item.image} alt="" />
                </div>
                <div className="individualleft__altimgmini">
                  <span>2</span>
                  <img src={item.image} alt="" />
                </div>
                <div className="individualleft__altimgmini">
                  <span>3</span>
                  <img src={item.image} alt="" />
                </div>
                <div className="individualleft__altimgmini">
                  <span>4</span>
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
            <div className="individualright__column">
              {/* <!-- Product Description --> */}
              <div className="product__description">
                <h1>{item.title}</h1>
                <p className="product__rating">
                  {Array(item.rating)
                    .fill()
                    .map(() => (
                      <StarRateIcon />
                    ))}
                </p>
                <div className="product__info">
                  <p>{item.description}</p>
                </div>
                <p className="product__category">
                  Category&nbsp;:&nbsp;{item.category}
                </p>
              </div>
              {/* <!-- Product Configuration --> */}
              <div className="product__configuration">
                <div className="product-color">
                  <span>Color</span>

                  <div className="color-choose">
                    <div>
                      <input type="radio" />
                      <label>
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label>
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label>
                        <span></span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- Cable Configuration --> */}
              </div>
              <div className="product__price">
                <div>Price&nbsp;:&nbsp;{item.price}$</div>
              </div>

              <div className="product__buy">
                <button
                  className="cart__btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>

                <button onClick={() => handleBuyNow(item)} className="buy__btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="relatedProduct">
        You may also like
        <RelatedHeadsProduct
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={5000}
          speed={500}
          slidesToShow={5}
          slidesToScroll={2}
        />
        <RelatedChairsProduct
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={5000}
          speed={500}
          slidesToShow={5}
          slidesToScroll={2}
        />
        <RelatedKeysProduct
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={5000}
          speed={500}
          slidesToShow={5}
          slidesToScroll={2}
        />
        <RelatedMousesProduct
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={5000}
          speed={500}
          slidesToShow={5}
          slidesToScroll={2}
        />
      </div>
    </div>
  );
}

export default IndividualPage;
