import React from "react";
import StarIcon from "@mui/icons-material/Star";

import "./CheckoutProduct.css";

function CheckoutProduct({cartProduct}) {
  return (
    <div>
      {cartProduct.map ((item) => {
        return(
        <div className="checkoutProduct">
          <div>
          <img className="checkoutProduct__image" src={ item.image} alt="" />
          </div>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{item.title}</p>
          <p className="checkoutProduct__price">
            <strong>$</strong>
            <strong>{item.price}</strong>
          </p>


        </div>
        <button >Remove from Basket</button>
      </div>)


      })

      }

    </div>
  );
}

export default CheckoutProduct;
