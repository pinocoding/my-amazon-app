import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import IndividualProduct from "./Gaming accessories/IndividualProduct";
import Paginationbutton from "../Pagination/Paginationbutton";
import "./Product.css";

function ProductCard({ page, list, setList, setPage }) {
  return (
    <div>
      <IndividualProduct list={list} />

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
