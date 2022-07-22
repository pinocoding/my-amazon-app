import React, { useEffect, useContext } from "react";
import firebase from "firebase/compat/app";
import { Link } from "react-router-dom";
import { AuthContext } from "../DataLayer/Datalayer";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";

import "./Product.css";
import { type } from "@testing-library/user-event/dist/type";

function ProductCard({ col, id, orderBy }) {
  const context = useContext(AuthContext);
  // const SetCurrentItem = context.SetCurrentItem;
  const list = context.list;
  const setList = context.setList;
  const page = context.page;
  const setPage = context.setPage;

  // !-----

  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection(col)
        .orderBy(id, orderBy)
        .limit(12)
        .onSnapshot(function (querySnapshot) {
          const items = [];
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
          .collection(col)
          .orderBy(id, orderBy)
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
        .collection(col)
        .orderBy(id, orderBy)
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
  const handleproduct = (item) => {
    context.setCurrentItem = item;
    console.log(typeof context.currentItem);
  };

  //

  return (
    <>
      <Link className="link" to="/ProductDetails">
        <div className="section-card">
          {list.map((item) => {
            return (
              <div onClick={() => handleproduct(item)}>
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
                    {Array(item.rating)
                      .fill()
                      .map(() => (
                        <StarPurple500SharpIcon />
                      ))}
                  </p>
                  <p className="card__description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
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

export default ProductCard;
