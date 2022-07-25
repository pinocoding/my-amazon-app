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
    <div className="checkout__container">

        <div className="checkout__left">
          {
          cartProduct.length > 0 && (
                  <div>
                    <CheckoutProduct/>
                  </div>
          )
        }
        {cartProduct.length < 0 && (

                    <div>this is no one at all</div>
        )


        }
        </div>






  </div>

  );
}

export default Checkout;
