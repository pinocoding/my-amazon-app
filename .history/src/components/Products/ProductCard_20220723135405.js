import React from "react";
import IndividualProduct from "./Gaming accessories/IndividualProduct";
import Paginationbutton from "../Pagination/Paginationbutton";
import "./Product.css";

function ProductCard({ page, list, setList, setPage }) {
  return (
    <div>
      <Link>
        <IndividualProduct list={list} />
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
