import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Paginationbutton from "../../Pagination/Paginationbutton.js";
import ProductCard from "./../ProductCard.js";
import OptionLeft from "./../OptionLeft.js";

function HeadSets({ col = "headsets", sorting }) {
  const [selected, setSelected] = useState("");
  const [list, setList] = useState([]);
  const [column, setColumn] = useState("");
  const [sorting, setSorting] = useState("");
  const [page, setPage] = useState(1);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    if (selected == 0) {
      column = "title";
      sorting = "desc";
      console.log(selected);
    }
    if (selected == 1) {
      column = "price";
      sorting = "asc";
      console.log(selected);
    }
    if (selected == 2) {
      column = "price";
      sorting = "desc";
      console.log(selected);
    }
    if (selected == 3) {
      column = "rating";
      sorting = "desc";
      console.log(selected);
    }

    const fetchData = async () => {
      await firebase
        .firestore()
        .collection(col)
        .orderBy(column, sorting)
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
            <div>
              <select value={selected} onChange={handleChange}>
                <option value="0">Sorted by Featured</option>
                <option value="1">Price: Low to High</option>
                <option value="2">Price: High to Low</option>
                <option value="3">Avg, Customer Review</option>
              </select>
            </div>
            {/* <OptionLeft selected={selected} handleChange={handleChange} /> */}
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
            column={column}
            sorting={sorting}
          />
        </div>
      </div>
    </div>
  );
}

export default HeadSets;
