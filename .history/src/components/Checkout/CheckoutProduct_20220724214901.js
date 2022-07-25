import React from "react";
import StarIcon from "@mui/icons-material/Star";

import "./CheckoutProduct.css";

function CheckoutProduct({ cartProduct}) {

  return (
    <div className="checkoutProduct">
      {cartProduct.map((item) => {
        return



      })}


    </div>
  );
}

export default CheckoutProduct;
