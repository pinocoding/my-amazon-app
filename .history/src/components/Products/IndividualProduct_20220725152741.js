import React from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
function IndividualProduct({ item }) {
  const [{ itembox }, dispatch] = useStateValue();

  return (
    <Link style={{ textDecoration: "none" }} to="/IndividualPage">
      <div className="card" key={item.id} onClick={handleClick}>
        {item.onsales ? (
          <div className="card__sales">
            <p>{item.onsales}</p>
          </div>
        ) : (
          <p className="card__nomarl">{item.sales}</p>
        )}
        <img src={item.image} alt="#" />
        <h2 className="card__title">{item.title}</h2>
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
    </Link>
  );
}

export default IndividualProduct;
