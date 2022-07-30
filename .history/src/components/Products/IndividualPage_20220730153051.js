import React, { useEffect, useContext, useState } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { AuthContext } from "../DataLayer/Datalayer";
import RelatedHeadsProduct from "../CarouselForm/RelatedHeadsProduct";

import TopSellersInBook from "../CarouselForm/TopSellersInBook";

import ReactImageMagnify from "react-image-magnify";
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
          <div key={item.id} className="individual__container">
            <div className="individualleft__column">
              <div className="individualleft__mainimg">
                {img ? (
                  <img src={img} alt="" />
                ) : (
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "https://googlechrome.github.io/samples/picture-element/images/kitten-small.png",
                      },
                      largeImage: {
                        src: "https://googlechrome.github.io/samples/picture-element/images/kitten-small.png",
                        width: 900,
                        height: 900,
                      },
                      enlargedImageContainerDimensions: {
                        width: "100%",
                        height: "100%",
                      },
                    }}
                  />
                )}
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
                  <p className="product__description">{item.description}</p>
                </div>
                <p className="product__category">
                  Category&nbsp;:&nbsp;{item.category}
                </p>
              </div>
              {/* <!-- Product Configuration --> */}
              <div className="product__configuration">
                {/* <div className="product-color">
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
                </div> */}
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
        <h3> You may also like</h3>

        <TopSellersInBook
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
