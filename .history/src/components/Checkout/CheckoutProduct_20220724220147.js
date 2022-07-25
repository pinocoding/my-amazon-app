import React from "react";
import StarIcon from "@mui/icons-material/Star";

import "./CheckoutProduct.css";

function CheckoutProduct({ cartProduct}) {

  return (
    <div>
      {cartProduct.map ((item) => {
          <div className="checkoutProduct">

          <img className="checkoutProduct__image" src={ item.img} alt="" />
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{item.title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{item.price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {/* đếm sao   */}
              {Array( cartProduct.rating)
                .fill()
                .map((_, i) => (
                  <p>
                    <StarIcon />
                  </p>
                ))}
            </div>
            <button >Remove from Basket</button>
          </div>
        </div>

      })

      }

    </div>
  );
}

export default CheckoutProduct;
