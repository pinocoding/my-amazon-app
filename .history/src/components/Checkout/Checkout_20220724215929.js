import React,{useContext} from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(AuthContext)
  const cartProduct= context.cartProduct

  return (
    <div className="checkout__container">

        <div className="checkout__left">
          {
          cartProduct.length > 0 && (

              <CheckoutProduct cartProduct={cartProduct}/>





          )
        }
        {cartProduct.length < 1 && (

         <div>there is nothing at all</div>
        )


        }
        </div>
        <div className="checkout__right">
          <Subtotal cartProduct={cartProduct}/>
        </div>






  </div>

  );
}

export default Checkout;
