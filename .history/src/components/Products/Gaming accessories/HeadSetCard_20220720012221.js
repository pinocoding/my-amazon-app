import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";
import Posts from "../../Pagination/Posts";
import Pagination from "../../Pagination/Pagination";
import { collection, getDocs } from "firebase/firestore";

import "../Product.css";

function HeadSetsCard() {
  //
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
    </div>
  );
}

export default HeadSetsCard;
