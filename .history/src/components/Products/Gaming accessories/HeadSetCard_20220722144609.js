import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import Button from "../../Button/Button.js";

import "../Product.css";

function HeadSetsCard(prop) {
  // !-----
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection("headsets")
        .orderBy("id", "desc")
        .limit(12)
        .onSnapshot(function (querySnapshot) {
          var items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });

          setList(items);
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
          .collection("headsets")
          .orderBy("id", "desc")
          .limit(12)
          .startAfter(item.id)
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
        .collection("headsets")
        .orderBy("id", "desc")
        .endBefore(item.id)
        .limitToLast(12)
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
      <Link to="/headsetsdetail"></Link>
      <div className="section-card">
        {list.map((item) => {
          return (
            <div className="card" key={item.id}>
              {item.onsales ? (
                <div className="card__sales">
                  <p>{item.onsales}</p>
                </div>
              ) : (
                <p className="card__nomarl">{item.sales}</p>
              )}
              <img src={item.image} alt="#" />
              <h2>{item.title}</h2>
              <p className="price">
                <strong>$</strong> {item.price}
              </p>
              <p className="rating">
                {" "}
                {Array(item.rating)
                  .fill()
                  .map(() => (
                    <StarPurple500SharpIcon />
                  ))}
              </p>
              <p className="card__description">{item.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>
      <div className="pagination__container">
        {
          //show previous button only when we have items
          page === 1 ? (
            ""
          ) : (
            <button
              className="pagination__button"
              onClick={() => showPrevious({ item: list[0] })}
            >
              <ArrowBackIosNewIcon />
            </button>
          )
        }
        {
          //show next button only when we have items
          list.length < 12 ? (
            ""
          ) : (
            <button
              className="pagination__button"
              onClick={() => showNext({ item: list[list.length - 1] })}
            >
              <ArrowForwardIosIcon className="pagination__icon" />
            </button>
          )
        }
      </div>
    </>
  );
}

export default HeadSetsCard;
