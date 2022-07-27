import React from "react";
import firebase from "firebase/compat/app";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Paginationbutton({ page, list, setList, setPage, col, selected }) {
  let field;
  let sorting;

  const showNext = ({ item }) => {
    if (selected == 1) {
      field = "price";
      sorting = "asc";
    }
    if (selected == 2) {
      field = "price";
      sorting = "desc";
    }

    if (list.length === 0) {
      alert("Thats all we have for now !");
    } else {
      const fetchNextData = async () => {
        await firebase
          .firestore()
          .collection(col)
          .orderBy(price,sorting)
          .limit(12)
          .startAfter(item.price)
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
        .orderBy(price,sorting)
        .endBefore(item.price)
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

  return (
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
  );
}

export default Paginationbutton;
