import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Paginationbutton() {
  const showNext = ({ item }) => {
    if (list.length === 0) {
      alert("Thats all we have for now !");
    } else {
      const fetchNextData = async () => {
        await firebase
          .firestore()
          .collection("headsets")
          .orderBy("id", "desc")
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
        .collection("headsets")
        .orderBy("id", "desc")
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
  const handleproduct = () => {};

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
