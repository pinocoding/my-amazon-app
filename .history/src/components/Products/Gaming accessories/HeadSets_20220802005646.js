/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Paginationbutton from "../../Pagination/Paginationbutton.js";
import LoadingPage from "../../LoaingPage/LoadingPage.js";
import ProductCard from "./../ProductCard.js";
import OptionLeft from "./../OptionLeft.js";
import AlSoLike from "../../AlSoLike/AlSoLike.js";

function HeadSets({ col = "headsets" }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");

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
          setList(items);
        })
        .then(() => setLoading(true));
    };
    fetchData();
  }, [selected, setLoading]);

  return (
    <div className="headsets">
      {loading ? (
        <div className="headsets__container">
          <div className="headsets__containeroptions">
            <div className="headsets__optionsleft">
              <OptionLeft selected={selected} handleChange={handleChange} />
            </div>
          </div>
          <div className="headsets__containerright">
            <div className="headsets__row">
              <ProductCard list={list} />
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
      ) : (
        <loadingPage />
      )}
    </div>
  );
}

export default HeadSets;
