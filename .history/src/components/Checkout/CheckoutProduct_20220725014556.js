import React,{useContext,useEffect} from "react";
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from "../DataLayer/Datalayer";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../DataLayer/reducer";
import { auth, fs } from "../firebase";


import "./CheckoutProduct.css";


function CheckoutProduct({cartUserProduct}) {
  const context = useContext(AuthContext)
  const currentUser = context.currentUser



  const HandleIncreaseQty =(item) => {

    const newProduct =  item;
    console.log(newProduct)

    newProduct.qty = item.qty+1
    newProduct.TotalProductPrice = newProduct.qty*item.price
    useEffect(()=> {

    })


      }
  return (
    <div>
      {cartUserProduct.map ((item) => {
        return(
        <div className="checkoutProduct">
          <div>
          <img className="checkoutProduct__image" src={ item.image} alt="" />
          </div>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{item.title}</p>
          <div className="number-input">
                    <button className="minus" ></button>
                      <input type="number" className="" value={item.qty}/>
                    <button className="plus" onClick={()=>HandleIncreaseQty(item)}></button>
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
            <span className="subtotal__count">({cartUserProduct.length} items)</span>
            &nbsp;: <strong>{value}</strong>
          </p>

        </>
      )}
      decimalScale={2}
      value={getBasketTotal(cartUserProduct)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}/>
      </div>



    </div>
  );
}

export default CheckoutProduct;
