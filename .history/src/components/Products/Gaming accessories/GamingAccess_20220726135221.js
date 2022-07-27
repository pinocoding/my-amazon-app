import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";

import ProductCard from "../ProductCard.js";
import OptionLeft from "../OptionLeft.js";
import Paginationbutton from "../../Pagination/Paginationbutton.js";

function GamingAcess({ col1 = "headsets", col2 = "keyboards" }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection(col1)
        .orderBy("id", "desc")
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
  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection(col2)
        .orderBy("id", "desc")
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

  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <OptionLeft />
          </div>
        </div>
        <div className="headsets__containerright">
          <div className="headsets__row">
            <ProductCard
              list={list}
              setList={setList}
              setPage={setPage}
              page={page}
              col={col1}
            />
          </div>
          {/* <Paginationbutton
            list={list}
            setList={setList}
            setPage={setPage}
            page={page}
            col={col}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default GamingAcess;
