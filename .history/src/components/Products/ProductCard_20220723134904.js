import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import Paginationbutton from "../Pagination/Paginationbutton";
import "./Product.css";

function ProductCard({ page, list, setList, setPage }) {
  return (
    <div>
      <IndividualProduct />

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
