import React, { useEffect } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);

  return (
    <div>
      {itembox.map((item) => (
        <div className="container">
          <div className="left-column">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="right-column">
        </div>
      ))}
    </div>
  );
}

export default IndividualPage;
