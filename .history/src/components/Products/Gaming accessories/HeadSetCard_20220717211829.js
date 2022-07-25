import React, { useEffect, useState } from "react";
import { auth, db } from "../../../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useStateValue } from "../../DataLayer/Datalayer";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  const [{ basket }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="section-card">
      {/* <h4>RESUlT</h4> */}
      {HeadPhonesDATA.map((item) => {
        const addToBasket = (e) => {
          e.preventDefault();
          console.log(HeadPhonesDATA.title);
          dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: item.id,
              title: item.title,
              image: item.image,
              price: item.price,
              rating: item.rating,
            },
          });
        };
        return (
          <div className="card">
            <img src={item.image} alt="" />

            <h1>{item.title}s</h1>
            <p className="price">{item.price}</p>
            <p className="card__description">{item.description}</p>
            <p>
              <button onClick={addToBasket}>Add to Cart</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HeadSetsCard;