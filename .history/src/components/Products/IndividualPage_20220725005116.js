import React, { useEffect,useContext } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { AuthContext } from "../DataLayer/Datalayer";
import { useNavigate } from "react-router-dom";
import {fs}from ".././firebase"
import StarRateIcon from "@mui/icons-material/StarRate";
import "./Product.css";

function IndividualPage() {
  const navigate = useNavigate();
  const context = useContext(AuthContext)
  const currentUser= context.currentUser
  const [{ itembox }] = useStateValue();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);
  const HandleAddToCard = (item) => {
      if( currentUserId!== null)  {
        const Product = item
        Product["qty"]= 1;
        Product["TotalProductPrice"]= Product.qty*Product.price;
        fs.collection("CartOf>>"+ currentUserId).doc(item.ID).set(Product);

      }
      else {
       navigate("/login")
      }
  }
  return (
    <div >
      {itembox.map((item) => {
        return (
          <div key={item.id} className="individual__container">
            <div className="individualleft__column">
              <img src={item.image} alt="" />
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
                <h4>Category&nbsp;:&nbsp;{item.category}</h4>
              </div>
              {/* <!-- Product Configuration --> */}
              <div className="product__configuration">
                <div className="product-color">
                  <span>Color</span>

                  <div className="color-choose">
                    <div>
                      <input type="radio" />
                      <label >
                        <span></span>
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label >
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
                <span>{item.price}$</span>
                <p className="cart__btn" onClick={() => HandleAddToCard(item)}>Add to cart</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IndividualPage;
