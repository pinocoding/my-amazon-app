import React, { useState } from "react";
import { AuthContext } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
function IndividualProduct({ item }) {
  const [currentItem, setCurrentItem] = useState({
    id : {item.id}
  });
  console.log(currentItem);
  // const context = useContext(AuthContext);
  // const currentItem = context.currentItem;

  // const setCurrentItem = context.setCurrentItem;
  const handleClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <div>
      {/* <Link to="/individualPage"> */}
      <div className="card" key={item.id} onClick={() => handleClick(item)}>
        {item.onsales ? (
          <div className="card__sales">
            <p>{item.onsales}</p>
          </div>
        ) : (
          <p className="card__nomarl">{item.sales}</p>
        )}
        <img src={item.image} alt="#" />
        <h2>{item.title}</h2>
        <p className="price">
          <strong>$</strong> {item.price}
        </p>
        <p className="rating">
          {Array(item.rating)
            .fill()
            .map(() => (
              <StarRateIcon />
            ))}
        </p>
        <p className="card__description">{item.description}</p>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default IndividualProduct;
