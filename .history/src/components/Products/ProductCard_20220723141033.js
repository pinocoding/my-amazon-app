import React from "react";
// import { link } from " react-router-dom";
import IndividualProduct from "./IndividualProduct";
import Paginationbutton from "../Pagination/Paginationbutton";
import "./Product.css";

function ProductCard({ page, list, setList, setPage }) {
  return (
    <div className="card__container">
      {list.map((item) => {
        return <IndividualProduct item={item} />;
      })}
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
