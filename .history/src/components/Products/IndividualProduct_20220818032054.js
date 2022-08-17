import React, { useContext } from "react";
import { DataContext } from "../DataLayer/Datalayer";
import { useStateValue } from "../DataLayer/Datalayer";
import { useNavigate } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
function IndividualProduct({ item, myKey }) {
  const navigate = useNavigate();
  const individualPage = () => {
    navigate("/IndividualPage");
  };
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
        dressdetail: item.dressdetail,
        watchdetail: item.watchdetail,
        Petdetails: item.Petdetails,
      },
    });
  };
  const context = useContext(DataContext);
  const isDark = context.isDark;

  return (
    <div style={{ textDecoration: "none" }} onClick={individualPage}>
      <div
        key={myKey}
        className={`card  ${isDark ? "carousel-dark" : "carousel-light"}`}
        onClick={handleClick}
      >
        {/* <p>{item.id}</p> */}
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
    </div>
  );
}

export default IndividualProduct;
