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
      {/* <h4>RESUlT</h4> */}
      {users.map((user) => {
        console.log(user.price);
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
