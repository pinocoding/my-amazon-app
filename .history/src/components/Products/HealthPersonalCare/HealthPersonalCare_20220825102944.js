/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Paginationbutton from "../../Pagination/Paginationbutton.js";
import ProductCard from "./../ProductCard.js";
import OptionLeft from "./../OptionLeft.js";
import AlSoLike from "../../AlSoLike/AlSoLike.js";

function HealthPersonalCare({ col = "healthpersonalcare" }) {
  const [selected, setSelected] = useState("");
  const [loading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  let field;
  let sorting;

  useEffect(() => {
    const fetchData = async () => {
      if (selected == 0) {
        field = "price";
        sorting = "asc";
      }
      if (selected == 1) {
        field = "price";
        sorting = "asc";
      }
      if (selected == 2) {
        field = "price";
        sorting = "desc";
      }

      await firebase
        .firestore()
        .collection(col)
        .orderBy(field, sorting)
        .limit(8)
        .onSnapshot(function (querySnapshot) {
          const items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });
          setPage(1);
          setIsLoading(false);
          setList(items);
        });
    };
    if (selected == 3) {
      const fectchingOnsales = async () => {
        await firebase
          .firestore()
          .collection(col)
          .where("onsales", "==", "best price")
          .orderBy("price", "desc")
          .limit(8)
          .onSnapshot(function (querySnapshot) {
            const items = [];
            querySnapshot.forEach(function (doc) {
              items.push({ key: doc.id, ...doc.data() });
            });
            setPage(1);
            setList(items);
            setIsLoading(false);
          });
      };
      fectchingOnsales();
    }
    setPage(1);
    fetchData();
  }, [selected]);

  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <OptionLeft selected={selected} handleChange={handleChange} />
          </div>
        </div>
        <div className="headsets__containerright">
          <div className="headsets__row">
            <ProductCard list={list} loading={loading} />
          </div>
          <Paginationbutton
            list={list}
            setList={setList}
            setPage={setPage}
            page={page}
            col={col}
            selected={selected}
          />
          <AlSoLike />
        </div>
      </div>
    </div>
  );
}

export default HealthPersonalCare;
