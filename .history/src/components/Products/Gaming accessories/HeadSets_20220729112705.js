/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../DataLayer/Datalayer.js";
import firebase from "firebase/compat/app";
import Paginationbutton from "../../Pagination/Paginationbutton.js";
import ProductCard from "./../ProductCard.js";
import OptionLeft from "./../OptionLeft.js";

function HeadSets({ col = "headsets" }) {
  const context = useContext(AuthContext);
  const [selected, setSelected] = useState("");
  const list = context.list;
  const setList = context.setList;

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
        </div>
      </div>
    </div>
  );
}

export default HeadSets;
