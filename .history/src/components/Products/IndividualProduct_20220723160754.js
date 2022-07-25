import React from "react";
import { useStateValue } from "../DataLayer/Datalayer";

import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
function IndividualProduct({ item }) {
  const [{ Xbox }, dispatch] = useStateValue();
  console.log(Xbox);
  const handleClick = () => {
    dispatch({
      type: "ADD_TO_XBOX",
      item: {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        rating: item.rating,
      },
    });
  };
  return (
    <div>
      <Link to="/individualPage">
      <div className="card" key={item.id} onClick={handleClick}>
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
    </div>
    <Link/></Link>
  );
}

export default IndividualProduct;