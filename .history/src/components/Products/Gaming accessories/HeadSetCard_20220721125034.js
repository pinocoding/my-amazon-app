import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { db } from "../../../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Product.css";

function HeadSetsCard(prop) {
  // !-----
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  // const [{ basket }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "headsets");
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getProducts();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection("headsets")
        .orderBy("id", "desc")
        .limit(5)
        .onSnapshot(function (querySnapshot) {
          var items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });
          console.log("first item ", items);
          setUsers(items);
        });
    };
    fetchData();
  }, []);

  const showNext = ({ item }) => {
    if (list.length === 0) {
      alert("Thats all we have for now !");
    } else {
      const fetchNextData = async () => {
        await firebase
          .firestore()
          .collection("users")
          .orderBy("created", "desc")
          .limit(5)
          .startAfter(item.created)
          .onSnapshot(function (querySnapshot) {
            const items = [];
            querySnapshot.forEach(function (doc) {
              items.push({ key: doc.id, ...doc.data() });
            });
            setList(items);
            setPage(page + 1);
          });
      };
      fetchNextData();
    }
  };

  const showPrevious = ({ item }) => {
    const fetchPreviousData = async () => {
      await firebase
        .firestore()
        .collection("users")
        .orderBy("created", "desc")
        .endBefore(item.created)
        .limitToLast(5)
        .onSnapshot(function (querySnapshot) {
          const items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });
          setList(items);
          setPage(page - 1);
        });
    };
    fetchPreviousData();
  };

  //

  return (
    <>
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
    </>
  );
}

export default HeadSetsCard;
