import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckOut/CheckoutProduct";
import { useStateValue } from "../DataLayer/Datalayer";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://static.businessinsider.com/image/5e34521624306a1ed60db4d9-2400/ip%20amazon%20prime%20banner%202020.png"
          alt=""
        />
        <div>
          <h3>Hello , {user?.email}</h3>
          <h2 className="checkout__title">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                // rating={item.rating}
              />
            ))}
          </h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
