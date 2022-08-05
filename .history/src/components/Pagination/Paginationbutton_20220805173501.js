import React from "react";
import firebase from "firebase/compat/app";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Paginationbutton({ page, list, setList, setPage, col, selected }) {
  let field;
  let sorting;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showNext = ({ item }) => {
    const fetchNextData = async () => {
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
    if (selected == 3) {
      const fectchingOnsales = async () => {
        await firebase
          .firestore()
          .collection(col)
          .where("id", "<", 15)
          .limit(8)
          .startAfter(item.id)
          .onSnapshot(function (querySnapshot) {
            const items = [];
            querySnapshot.forEach(function (doc) {
              items.push({ key: doc.id, ...doc.data() });
            });
            setList(items);
            // setIsLoading(false);
            console.log(list);
          });
        fectchingOnsales();
      };
    }
    fectchingOnsales();
    fetchNextData();
  };
  const showPrevious = ({ item }) => {
    const fetchPreviousData = async () => {
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
        .endBefore(item.price)
        .limitToLast(8)
        .onSnapshot(function (querySnapshot) {
          const items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });
          setList(items);
          setPage(page - 1);
        });
    };
    if (selected == 3) {
      const fectchingOnsales = async () => {
        await firebase
          .firestore()
          .collection(col)
          .where("id", "<", 15)
          .limit(8)
          .startAfter(item.id)
          .onSnapshot(function (querySnapshot) {
            const items = [];
            querySnapshot.forEach(function (doc) {
              items.push({ key: doc.id, ...doc.data() });
            });
            setList(items);
            // setIsLoading(false);
            console.log(list);
          });
      };
      fectchingOnsales();
    }
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
        list.length < 8 ? (
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
