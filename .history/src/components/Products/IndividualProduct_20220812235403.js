import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { useStateValue } from "../DataLayer/Datalayer";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
function IndividualProduct({ item, key }) {
  const [{ itembox }, dispatch] = useStateValue();

  const handleClick = () => {
    dispatch({
      type: "ADD_TO_XBOX",
      item: {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        rating: item.rating,
        category: item.category,
        onsales: item.onsales,
        description: item.description,
        author: item.author,
        details: item.details,
      },
    });
  };
  const context = useContext(DataContext);
  const isDark = context.isDark;

  return (
    <Link style={{ textDecoration: "none" }} to="/IndividualPage">
      <div
        className={`card  ${isDark ? "carousel-dark" : "carousel-light"}`}
        onClick={handleClick}
      >
        {item.onsales && (
          <div className="card__sales">
            <p>{item.onsales}</p>
          </div>
        )}
        <img src={item.image} alt="#" />
        <h2 className="card__title">{item.title}</h2>
        <p className="card__price">
          <strong>$</strong> {item.price}
        </p>
        <p className="card__rating">
          {Array(item.rating)
            .fill()
            .map((item, index) => (
              <StarRateIcon key={index} />
            ))}
        </p>
        <p className="card__description">{item.description}</p>
      </div>
    </Link>
  );
}

export default IndividualProduct;
