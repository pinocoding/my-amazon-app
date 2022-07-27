/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Paginationbutton from "../../Pagination/Paginationbutton.js";
import ProductCard from "./../ProductCard.js";
import OptionLeft from "./../OptionLeft.js";

function HeadSets({ col = "headsets" }) {
  const [selected, setSelected] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  if (selected == 0) {
    console.log("hello");
  }
  if (selected == 1) {
    console.log("hello");
  }
  if (selected == 2) {
    console.log("hello");
  }
  if (selected == 3) {
    console.log("hello");
  }
  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection(col)
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
            <div>
              <OptionLeft selected={selected} handleChange={handleChange} />
            </div>
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
