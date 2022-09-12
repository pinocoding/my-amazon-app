import React, { useEffect, useContext, useState } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { useTranslation } from "react-i18next";

import { DataContext } from "../DataLayer/Datalayer";
import StarRateIcon from "@mui/icons-material/StarRate";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "./Product.css";

import Author from "../Author/Author";
import ShowMoreLessBtn from "../ShowMoreLessBtn/ShowMoreLessBtn";
import AlSoLike from "../AlSoLike/AlSoLike";
import ProductCarousel from "../CarouselForm/ProductCarousel";
import ProductDetails from "../ProductDetail/ProductDetails";
import DressDetails from "../DressDetail/DressDetail";
import WatchDetail from "../WatchDetail/WatchDetail";
import Petdetail from "../Petdetail/Petdetail";
import AddToCartColumnList from "../AddToCartColumnList/AddToCartColumnList";

function IndividualPage() {
  const { t } = useTranslation(["common"]);
  const [img, setImg] = useState();

  const context = useContext(DataContext);
  const isDark = context.isDark;
  const userCartProduct = context.userCartProduct;
  const currentUser = context.currentUser;
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

  if (itembox[0].author === undefined) {
    delete itembox[0].author;
  }
  if (itembox[0].details === undefined) {
    delete itembox[0].details;
  }
  if (itembox[0].dressdetail === undefined) {
    delete itembox[0].dressdetail;
  }
  if (itembox[0].watchdetail === undefined) {
    delete itembox[0].watchdetail;
  }
  if (itembox[0].petdetail === undefined) {
    delete itembox[0].petdetail;
  }

  return (
    <div className="individual__wrap">
      {itembox.map((item, index) => {
        return (
          <div key={index}>
            <div
              className={`individual__container ${
                isDark ? "indiviual-dark" : "indiviual-light"
              }`}
            >
              <div className="individualleft__column">
                <div className="individualleft__mainimg">
                  {item.onsales === "best price" && (
                    <div className="individualleft__ribbon">
                      <p>{item.onsales}</p>
                    </div>
                  )}

                  <div className="individualleft__InnerImageZoom">
                    <InnerImageZoom
                      src={item.image}
                      zoomSrc={item.image}
                      zoomScale={1.3}
                      zoomPreload={true}
                      zoomType="hover"
                    />
                  </div>
                  <div className="individualleft__ProductCarousel">
                    <ProductCarousel img={item.image} />
                  </div>
                </div>

                <div className="individualleft__altimg">
                  <div></div>
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

                {item.author && (
                  <div className="individualright__columnAuthor">
                    {t("by")} {item.author.name} ({t("Author")})
                  </div>
                )}

                <div className="product__description">
                  <div className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map((value, index) => (
                        <StarRateIcon key={index} />
                      ))}
                  </div>
                  <div className="product__info">
                    <div className="product__description">
                      <h3>
                        {item.author
                          ? t("About this Book")
                          : t("About this item")}
                      </h3>

                      <ShowMoreLessBtn limit={500}>
                        {item.description}
                      </ShowMoreLessBtn>
                    </div>
                    {item.author && (
                      <div>
                        <div
                          style={{
                            maxWidth: "450px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <p>
                              <strong>{t("Publisher")} :</strong>
                            </p>
                            <p>
                              <strong>{t("Language")} : </strong>
                            </p>
                            <p>
                              <strong>{t("Paperback")} : </strong>
                            </p>
                            <p>
                              <strong>{t("Itemweight")} :</strong>
                            </p>
                            <p>
                              <strong>{t("Dimensions")} :</strong>
                            </p>
                          </div>
                          <div>
                            <p>Atria (August 2, 2016)</p>
                            <p>English</p>
                            <p>384 pages</p>
                            <p>10.4 ounces</p>
                            <p>5.31 x 0.9 x 8.25 inches</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.details && (
                      <div
                        style={{
                          maxWidth: "450px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <p>
                            <strong>{t("Brand")} :</strong>
                          </p>
                          <p>
                            <strong>{t("Color")} :</strong>
                          </p>
                          <p>
                            <strong>{t("Connectivity Technology")} :</strong>
                          </p>
                          <p>
                            <strong>{t("Model")} :</strong>
                          </p>
                          <p>
                            <strong>{t("Noise")} :</strong>
                          </p>
                        </div>
                        <div>
                          <p>{item.details.brand}</p>
                          <p>{item.details.color}</p>
                          <p> {item.details.connectivity}</p>
                          <p> {item.details.model}</p>
                          <p> {item.details.noise}</p>
                        </div>
                      </div>
                    )}
                    {item.dressdetail && <div>{item.dressdetail.des}</div>}
                    {item.watchdetail && (
                      <div
                        style={{
                          maxWidth: "100%",
                          display: "flex",
                        }}
                      >
                        <div style={{ width: "35%" }}>
                          <p>
                            <strong>{t("Operating System")} :</strong>
                          </p>
                          <p>
                            <strong>{t("Special Feature")} :</strong>
                          </p>
                        </div>
                        <div>
                          <p>{item.watchdetail.operatingsystem}</p>
                          <p>{item.watchdetail.specialfeature}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="product__price">
                  <div>
                    {t("Price")}&nbsp;:&nbsp;<span>{item.price} $</span>
                  </div>
                </div>

                <div className="product__buy">
                  <button
                    className="cart__btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    {t("Add to cart")}
                  </button>

                  <button
                    onClick={() => handleBuyNow(item)}
                    className="buy__btn"
                  >
                    {t("Buy now")}
                  </button>
                </div>
              </div>
            </div>
            {item.details && <ProductDetails img={item.image} />}
            {item.author && (
              <Author name={item.author.name} infor={item.author.infor} />
            )}
            {item.dressdetail && <DressDetails img={item.image} />}
            {item.watchdetail && <WatchDetail img={item.image} />}
            {item.petdetail && <Petdetail img={item.image} />}
          </div>
        );
      })}
      {currentUser && userCartProduct.length > 0 ? (
        <div className="addtocart__column">
          <AddToCartColumnList />
        </div>
      ) : (
        ""
      )}

      <div className="relatedProduct">
        <AlSoLike />
      </div>
    </div>
  );
}

export default IndividualPage;
