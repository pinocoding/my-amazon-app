import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const list = context.list;
  return (
    <div>
      {list.map((item) => {
        return (
          <div className="">
            <div>{item.id}</div>
            {/* <img src={item.image} alt="" />; */}
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetails;
