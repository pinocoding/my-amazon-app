import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";
import ReactPaginate from "react-paginate";

import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "../../DataLayer/Datalayer";
import Pagination from "../../../Pagination/Pagination";
import "../Product.css";

function HeadSetsCard() {
  const { data } = props;
  // ------//-------------
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // ------------//
  // const [{ basket }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "headsets");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  return (
    <div className="section-card">
      {users.map((user) => {
        console.log(users);
        return (
          <div className="card" key={user.id}>
            <img src={user.image} alt="" />

            <h1>{user.title}</h1>
            <p className="price">
              {user.price} <strong>$</strong>
            </p>
            <p className="card__description">{user.description}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        );
      })}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default HeadSetsCard;
