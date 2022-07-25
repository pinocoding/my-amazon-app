import React,{useContext} from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import "./Checkout.css";

import CheckoutProduct from "../CheckOut/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const context = useContext(AuthContext)
  const cartUserProduct= context.cartUserProduct

  return (
    <div className="checkout__container">

        <div className="checkout__left">
          {
        cartUserProduct.length > 0 && (

              <CheckoutProduct cartProduct={cartUserProduct}/>
               )
        }
        {cartUserProduct.length < 1 && (

         <div>there is nothing at all</div>
        )


        }
        </div>
        <div className="checkout__right">
          <Subtotal cartProduct={cartUserProduct}/>
        </div>






  </div>

  );
}

export default Checkout;
