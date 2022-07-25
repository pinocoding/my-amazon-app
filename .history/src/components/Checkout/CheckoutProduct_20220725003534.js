import React from "react";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../DataLayer/reducer";


import "./CheckoutProduct.css";


function CheckoutProduct() {
  const handleDecrease =(item) => {
    console.log(item)

    }
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
          <div className="number-input">
                    <button className="minus" onClick={()=>handleDecrease(item)}></button>
                      <input type="number" className="" value={item.qty}/>
                    <button className="plus"></button>
           </div>

          <button>Remove from Basket</button>

        </div>

        <div className="checkoutProduct__price">
            <strong>$</strong>
            <strong>{item.price}</strong>
         </div>



      </div>)


      })
      }
      <div className="checkoutProduct__subtotal">
      <CurrencyFormat
       renderText={(value) => (
        <>
          <p>

            Subtotal&nbsp;
            <span className="subtotal__count">({cartProduct.length} items)</span>
            &nbsp;: <strong>{value}</strong>
          </p>

        </>
      )}
      decimalScale={2}
      value={getBasketTotal(cartProduct)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}/>
      </div>



    </div>
  );
}

export default CheckoutProduct;
