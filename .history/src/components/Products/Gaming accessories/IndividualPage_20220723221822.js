import React, { useEffect } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();
  console.log(itembox);
  useEffect(() => {
    window.localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);
  useEffect(() => {
    const data = window.localStorage.gettItem("item");
    console.log(data);
  }, []);

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
