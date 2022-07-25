import React,{useContext} from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(AuthContext)
  const cartProduct= context.cartProduct
  const currentUser = context.currentUser
  return (
    <div className="checkout">
        <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://static.businessinsider.com/image/5e34521624306a1ed60db4d9-2400/ip%20amazon%20prime%20banner%202020.png"
          alt=""
        />
        </div>
        <h2 className="checkout__title"></h2>
        {
          cartProduct.length > 0 && (
                  <div>
                    <CheckoutProduct/>
                  </div>
          )
        }
        {
cartProduct.length < 1 && (

)
        }




  </div>

  );
}

export default Checkout;
