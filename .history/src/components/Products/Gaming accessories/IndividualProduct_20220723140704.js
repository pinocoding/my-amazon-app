import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
function IndividualProduct({ item }) {
  return (
    <div className="section-card">
      <div>
        <div className="card" key={item.id}>
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
      );
    </div>
  );
}

export default IndividualProduct;
