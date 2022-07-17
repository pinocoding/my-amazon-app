import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "../../DataLayer/Datalayer";
import "../Product.css";

function HeadSetsCard() {
  const [{ basket }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getProducts();
  }, []);

  return (
    <div className="section-card">
      <h4>RESUlT</h4>
      {}
      return (
      <div className="card">
        <img src="" alt="" />

        <h1></h1>
        <p className="price"></p>
        <p className="card__description"></p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
      );
    </div>
  );
}

export default HeadSetsCard;
