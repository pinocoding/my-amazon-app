import React, { useEffect, useContext } from "react";
import ProductCard from "./../ProductCard.js";
import { AuthContext } from "./../DataLayer/Datalayer";
import OptionLeft from "./../OptionLeft.js";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
function HeadSets() {
  const context = useContext(AuthContext);
  // const SetCurrentItem = context.SetCurrentItem;
  const list = context.list;
  const setList = context.setList;
  const page = context.page;
  const setPage = context.setPage;

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
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadSets;
