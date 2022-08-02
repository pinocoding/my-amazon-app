import React, { useEffect, useContext, useState } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { DataContext } from "../DataLayer/Datalayer";
import TopSellerDresses from "../CarouselForm/TopSellerDresses";
import TopVideosGames from "../CarouselForm/TopVideosGames";
import TopSellersInBook from "../CarouselForm/TopSellersInBook";
import TopToys from "../CarouselForm/TopToys";
import StarRateIcon from "@mui/icons-material/StarRate";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./Product.css";
import TopSmartWatches from "../CarouselForm/TopSmartWatches";
import Footer from "../Footer/Footer";

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

                <button onClick={() => handleBuyNow(item)} className="buy__btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="relatedProduct">
        <h4> You may also like</h4>
        <TopSmartWatches
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          autoplay={true}
          autoplaySpeed={7000}
          speed={500}
          slidesToShow={3}
          slidesToScroll={2}
        />

        <TopSellersInBook
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          // autoplay={true}
          autoplaySpeed={7000}
          speed={500}
          slidesToShow={3}
          slidesToScroll={2}
        />
        <TopSellerDresses
          adaptiveHeight={true}
          dots={false}
          infinite={true}
          // autoplay={true}
          autoplaySpeed={7000}
          speed={500}
          slidesToShow={3}
          slidesToScroll={2}
        />
        <TopVideosGames
          adaptiveHeight={true}
          dots={false}
          // autoplay={true}
          infinite={true}
          autoplaySpeed={7000}
          speed={500}
          slidesToShow={3}
          slidesToScroll={2}
        />
      </div>
      <TopToys
        adaptiveHeight={true}
        dots={false}
        // autoplay={true}
        infinite={true}
        autoplaySpeed={7000}
        speed={500}
        slidesToShow={3}
        slidesToScroll={2}
      />
    </div>
  );
}

export default IndividualPage;
