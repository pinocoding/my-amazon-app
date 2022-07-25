import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../DataLayer/reducer";


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


        </div>
        <p className="checkoutProduct__price">
            <strong>$</strong>
            <strong>{item.price}</strong>
         </p>

      </div>)


      })

      }
      <CurrencyFormat
       renderText={(value) => (
        <>
          <p>

            Subtotal&nbsp;
            <span className="subtotal__count">({cartProduct.length} items)</span>
            &nbsp;: <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(cartProduct)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}/>


    </div>
  );
}

export default CheckoutProduct;
