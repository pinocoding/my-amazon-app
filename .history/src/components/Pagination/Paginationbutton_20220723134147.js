import React from "react";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
function Paginationbutton() {
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