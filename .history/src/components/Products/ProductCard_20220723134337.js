import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";

import "./Product.css";

function ProductCard({ page, list, setList, setPage }) {
  return (
    <div>
      <Link className="link" to="/ProductDetails">
        <div className="section-card">
          {list.map((item) => {
            return (
              <div onClick={() => handleproduct()}>
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
              </div>
            );
          })}
        </div>
      </Link>
      <Paginationbutton
        list={list}
        setList={setList}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default ProductCard;
