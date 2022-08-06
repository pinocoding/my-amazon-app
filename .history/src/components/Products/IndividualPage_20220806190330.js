import React, { useEffect, useContext, useState } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { DataContext } from "../DataLayer/Datalayer";

import StarRateIcon from "@mui/icons-material/StarRate";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./Product.css";

import AlSoLike from "../AlSoLike/AlSoLike";

function IndividualPage() {
  const [img, setImg] = useState();
  const context = useContext(DataContext);
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
  const handleHoverLeave = () => {
    setImg();
  };
  const handleHover = (item) => {
    setImg(item.image);
  };
  return (
    <div className="individual__wrap">
      {itembox.map((item) => {
        return (
          <>
            <div key={item.id} className="individual__container">
              <div className="individualleft__column">
                <div className="individualleft__mainimg">
                  <InnerImageZoom
                    src={item.image}
                    zoomSrc={item.image}
                    zoomScale="1.3"
                    zoomPreload="true"
                    zoomType="hover"
                  />
                </div>

                <div className="individualleft__altimg">
                  <div
                    className="individualleft__altimgmini"
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                  >
                    <span>1</span>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                    className="individualleft__altimgmini"
                  >
                    <span>2</span>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                    className="individualleft__altimgmini"
                  >
                    <span>3</span>
                    <img src={item.image} alt="" />
                  </div>
                  <div
                    onMouseOver={() => handleHover(item)}
                    onMouseLeave={() => handleHoverLeave(item)}
                    className="individualleft__altimgmini"
                  >
                    <span>4</span>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
              <div className="individualright__column">
                <h1>{item.title}</h1>
                {/* <p>by {item.author.name}</p> */}
                <div className="product__description">
                  <p className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map(() => (
                        <StarRateIcon />
                      ))}
                  </p>
                  <div className="product__info">
                    <p className="product__description">{item.description}</p>
                  </div>
                </div>

                <div className="product__configuration"></div>
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

                  <button
                    onClick={() => handleBuyNow(item)}
                    className="buy__btn"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div className="relatedProduct">
        <AlSoLike />
      </div>
    </div>
  );
}

export default IndividualPage;
