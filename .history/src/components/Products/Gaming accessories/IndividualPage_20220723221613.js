import React, { useEffect } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();
  console.log(itembox);
  useEffect(() => {
    window.localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);
  useEffect(() => {
    window.localStorage.gettItem("item", JSON.stringify(itembox));
  }, [itembox]);
  return (
    <div>
      {itembox.map((item) => (
        <div>
          {item.id}
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default IndividualPage;
