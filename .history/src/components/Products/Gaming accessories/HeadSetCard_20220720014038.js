import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";
// import Posts from "../../Pagination/Posts";
// import Pagination from "../../Pagination/Pagination";
import ReactPaginate from "react-paginate";
import { collection, getDocs } from "firebase/firestore";

import "../Product.css";

function HeadSetsCard() {
  //
  //

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

  //
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  //
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  //

  return (
    <div className="section-card">
      {users.map((user) => {
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
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default HeadSetsCard;
