import React from "react";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
function IndividualProduct({ item }) {
  return (
    <div className="section-card">
      {list.map((item) => {
        return (
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
                  <StarPurple500SharpIcon />
                ))}
            </p>
            <p className="card__description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default IndividualProduct;
