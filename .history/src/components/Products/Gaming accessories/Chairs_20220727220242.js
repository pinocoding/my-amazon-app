import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Paginationbutton from "../../Pagination/Paginationbutton.js";
import ProductCard from "../ProductCard.js";
import OptionLeft from "../OptionLeft.js";

function Chairs({ col = "chairs" }) {
  const [selected, setSelected] = useState("");
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
        .collection("chairs")
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
              col={col}
            />
          </div>
          <Paginationbutton
            list={list}
            setList={setList}
            setPage={setPage}
            page={page}
            col={col}
          />
        </div>
      </div>
    </div>
  );
}

export default Chairs;
